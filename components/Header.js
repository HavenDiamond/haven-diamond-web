"use client";
import { useEffect, useState } from "react";

const links = [["Stays", "/#stays"], ["Concierge", "/#concierge"], ["Corporate", "/#corporate"], ["About", "/#about"], ["FAQ", "/#faq"]];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={scrolled || open ? "hdr scrolled" : "hdr"}>
      <div className="wrap hdr-in">
        <a href="/#top"><img src="/logo.png" alt="Haven Diamond" className="logo" /></a>
        <nav className="nav-d">{links.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</nav>
        <div className="hdr-r">
          <a className="btn-sm" href="/#enquire">Enquire</a>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
        </div>
      </div>
      {open && (
        <nav className="nav-m">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="/#enquire" onClick={() => setOpen(false)}>Enquire</a>
        </nav>
      )}
    </header>
  );
}
