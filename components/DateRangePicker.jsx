"use client";
import { useEffect, useMemo, useRef, useState } from "react";

/* Dependency-free check-in / check-out picker.
   Dates are ISO strings ("2026-10-14") so they are safe to store, send and compare.

   Props
   - defaultCheckIn / defaultCheckOut  ISO strings (optional)
   - minNights                         minimum stay, default 1
   - blocked                           array of ISO dates already booked (optional)
   - onChange({ checkIn, checkOut })   called on every change
   - nameIn / nameOut                  names of the hidden inputs, for plain form posts
*/

const NONE = [];
const pad = (n) => String(n).padStart(2, "0");
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromISO = (s) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const today = () => {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
};
const nightsBetween = (a, b) => Math.round((fromISO(b) - fromISO(a)) / 864e5);

const fmtShort = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short" });
const fmtLong = new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const fmtMonth = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" });
const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

export default function DateRangePicker({
  defaultCheckIn = "",
  defaultCheckOut = "",
  minNights = 1,
  blocked = NONE,
  onChange,
  nameIn = "checkin",
  nameOut = "checkout",
}) {
  const todayISO = useMemo(() => toISO(today()), []);
  const currentMonthISO = todayISO.slice(0, 8) + "01";
  const blockedSet = useMemo(() => new Set(blocked), [blocked]);

  const [range, setRange] = useState({ start: defaultCheckIn, end: defaultCheckOut });
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState("in"); // which field the next click fills: "in" | "out"
  const [hover, setHover] = useState("");
  const [view, setView] = useState(() => {
    const base = defaultCheckIn ? fromISO(defaultCheckIn) : today();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });
  const root = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (root.current && !root.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const { start, end } = range;
  const choosingEnd = Boolean(start) && target === "out";

  const commit = (s, e) => {
    setRange({ start: s, end: e });
    onChange?.({ checkIn: s, checkOut: e });
  };

  const clashes = (a, b) => {
    for (let d = fromISO(a); toISO(d) < b; d.setDate(d.getDate() + 1)) {
      if (blockedSet.has(toISO(d))) return true;
    }
    return false;
  };

  const isDisabled = (iso) =>
    iso < todayISO ||
    blockedSet.has(iso) ||
    (choosingEnd && iso > start && nightsBetween(start, iso) < minNights);

  const pick = (iso) => {
    if (!choosingEnd || iso <= start || clashes(start, iso)) {
      commit(iso, "");
      setTarget("out");
      return;
    }
    commit(start, iso);
    setTarget("in");
    setHover("");
    setOpen(false);
  };

  const openWith = (field) => {
    setTarget(field === "out" && start ? "out" : "in");
    if (start) {
      const b = fromISO(start);
      setView(new Date(b.getFullYear(), b.getMonth(), 1));
    }
    setOpen(true);
  };

  const shift = (delta) => setView(new Date(view.getFullYear(), view.getMonth() + delta, 1));

  const lead = (view.getDay() + 6) % 7; // week starts Monday
  const count = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [
    ...Array(lead).fill(null),
    ...Array.from({ length: count }, (_, i) => toISO(new Date(view.getFullYear(), view.getMonth(), i + 1))),
  ];

  const previewEnd = end || (choosingEnd && hover > start ? hover : "");
  const nights = start && end ? nightsBetween(start, end) : 0;

  return (
    <div className="dp" ref={root}>
      <div className="dp-fields">
        <button
          type="button"
          className={`dp-field${open && target === "in" ? " on" : ""}`}
          onClick={() => openWith("in")}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <span>Check-in</span>
          <b className={start ? "" : "ph"}>{start ? fmtShort.format(fromISO(start)) : "Add date"}</b>
        </button>
        <button
          type="button"
          className={`dp-field${open && target === "out" ? " on" : ""}`}
          onClick={() => openWith("out")}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <span>Check-out</span>
          <b className={end ? "" : "ph"}>{end ? fmtShort.format(fromISO(end)) : "Add date"}</b>
        </button>
      </div>

      <input type="hidden" name={nameIn} value={start} />
      <input type="hidden" name={nameOut} value={end} />

      {open && (
        <div className="dp-pop" role="dialog" aria-label="Choose your dates">
          <div className="dp-head">
            <div className="dp-title">{fmtMonth.format(view)}</div>
            <div className="dp-nav">
              <button type="button" onClick={() => shift(-1)} disabled={toISO(view) <= currentMonthISO} aria-label="Previous month">‹</button>
              <button type="button" onClick={() => shift(1)} aria-label="Next month">›</button>
            </div>
          </div>

          <div className="dp-week" aria-hidden="true">
            {WEEKDAYS.map((w, i) => <span key={i}>{w}</span>)}
          </div>

          <div className="dp-grid" onMouseLeave={() => setHover("")}>
            {cells.map((iso, i) => {
              if (!iso) return <span key={`e${i}`} />;
              const isStart = iso === start;
              const isEnd = iso === end;
              const inRange = start && previewEnd && iso > start && iso < previewEnd;
              const cls = [
                "dp-day",
                isStart && "is-start",
                isEnd && "is-end",
                inRange && "in-range",
                iso === todayISO && "is-today",
                blockedSet.has(iso) && "is-blocked",
              ].filter(Boolean).join(" ");
              return (
                <button
                  key={iso}
                  type="button"
                  className={cls}
                  disabled={isDisabled(iso)}
                  aria-label={fmtLong.format(fromISO(iso))}
                  aria-pressed={isStart || isEnd}
                  onClick={() => pick(iso)}
                  onMouseEnter={() => setHover(iso)}
                >
                  {Number(iso.slice(8))}
                </button>
              );
            })}
          </div>

          <div className="dp-foot">
            <span>
              {nights
                ? `${nights} night${nights > 1 ? "s" : ""}`
                : choosingEnd
                ? "Select your check-out"
                : "Select your check-in"}
            </span>
            {start && (
              <button type="button" onClick={() => { commit("", ""); setTarget("in"); }}>
                Clear dates
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}