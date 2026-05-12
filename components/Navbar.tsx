"use client";

import { useEffect, useState } from "react";
import { useBooking } from "./BookingContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 40px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        transition: "background 0.4s, border-bottom 0.4s",
        background: scrolled ? "rgba(32,32,32,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "1.4rem",
          letterSpacing: "0.05em",
          color: "var(--gold-accent)",
          textDecoration: "none",
        }}
      >
        Luxury<span style={{ color: "#e8e8ec" }}>Homes</span>
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: 36,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="nav-desktop-links"
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                color: "#F9F9F9",
                textDecoration: "none",
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.3s",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#F9F9F9")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 16 }}>
        {/* Book a call CTA */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openBooking("Essentials");
          }}
          className="nav-cta nav-contact-btn"
          style={{
            border: "1px solid var(--gold)",
            color: "var(--gold)",
            padding: "10px 22px",
            borderRadius: 2,
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            textDecoration: "none",
            transition: "background 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--gold)";
            e.currentTarget.style.color = "var(--ink)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--gold)";
          }}
        >
          Book a call
        </a>
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ width: 24, height: 1, background: "var(--gold)", display: "block" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(32,32,32,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(249,249,249,0.4)",
                textDecoration: "none",
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              openBooking("Essentials");
            }}
            style={{
              color: "var(--gold)",
              textDecoration: "none",
              fontSize: "0.9rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Book a call
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-contact-btn { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
