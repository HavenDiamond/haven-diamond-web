"use client";
import { useState } from "react";
import { properties } from "@/lib/data";
import { wa, EMAIL } from "@/lib/whatsapp";
import WaIcon from "./WaIcon";
import DateRangePicker from "./DateRangePicker";

const nice = (iso) => {
  if (!iso) return "-";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
};
const nightsOf = (a, b) => {
  if (!a || !b) return 0;
  const [y1, m1, d1] = a.split("-").map(Number);
  const [y2, m2, d2] = b.split("-").map(Number);
  return Math.round((new Date(y2, m2 - 1, d2) - new Date(y1, m1 - 1, d1)) / 864e5);
};

// Pass `property` (a name) on an apartment page to lock the enquiry to it.
// Optional `blocked`: array of ISO dates ("2026-10-20") that are already booked.
export default function EnquiryForm({ property, blocked }) {
  const [f, setF] = useState({ name: "", type: "Stay", checkin: "", checkout: "", guests: "2", place: property || "No preference", notes: "" });
  const set = (k) => (e) => setF((prev) => ({ ...prev, [k]: e.target.value }));
  const setDates = ({ checkIn, checkOut }) => setF((prev) => ({ ...prev, checkin: checkIn, checkout: checkOut }));

  const nights = nightsOf(f.checkin, f.checkout);
  const message = () =>
    `Hi Haven Diamond, I'd like to enquire${property ? ` about ${property}` : ""}.\n\nName: ${f.name || "-"}\n${property ? "" : `Enquiry: ${f.type}\n`}Check-in: ${nice(f.checkin)}\nCheck-out: ${nice(f.checkout)}${nights ? ` (${nights} night${nights > 1 ? "s" : ""})` : ""}\nGuests: ${f.guests}\n${property ? "" : `Preferred property: ${f.place}\n`}Requests: ${f.notes || "-"}`;
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent("Enquiry — Haven Diamond")}&body=${encodeURIComponent(message())}`;

  return (
    <div className="form">
      <label>Your name<input value={f.name} onChange={set("name")} placeholder="Full name" /></label>
      {!property && (
        <label>I'm enquiring about
          <select value={f.type} onChange={set("type")}><option>Stay</option><option>Concierge service</option><option>Corporate</option></select>
        </label>
      )}

      <DateRangePicker blocked={blocked} onChange={setDates} />

      <div className="two">
        <label>Guests<input type="number" min="1" value={f.guests} onChange={set("guests")} /></label>
        {!property && (
          <label>Property
            <select value={f.place} onChange={set("place")}><option>No preference</option>{properties.map((p) => <option key={p.slug}>{p.name}</option>)}</select>
          </label>
        )}
      </div>
      <label>Additional requests<textarea rows="3" value={f.notes} onChange={set("notes")} placeholder="Airport pickup, private chef, late check-in…" /></label>
      <a className="btn wa full" href={wa(message())} target="_blank" rel="noopener"><WaIcon /> Send on WhatsApp</a>
      <a className="alt" href={mail}>or send by email</a>
    </div>
  );
}