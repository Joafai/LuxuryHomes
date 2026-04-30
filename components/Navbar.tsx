"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        background: scrolled ? "rgba(3,4,15,0.95)" : "transparent",
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
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.3s",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 16 }}>
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
            background: "rgba(3,4,15,0.98)",
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
                color: "rgba(242,237,230,0.4)",
                textDecoration: "none",
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
