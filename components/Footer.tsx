"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        borderTop: "1px solid var(--border)",
        padding: "64px 40px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 48,
          marginBottom: 48,
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <a
            href="#hero"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.4rem",
              letterSpacing: "0.05em",
              color: "var(--gold)",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 16,
            }}
          >
            Luxury<span style={{ color: "#e8e8ec" }}>Homes</span>
          </a>
          <p
            style={{
              color: "rgba(249,249,249,0.4)",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: 280,
            }}
          >
            Premium digital presence for elite real estate agents. We build websites that don&apos;t
            just look beautiful — they perform.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#e8e8ec",
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            Contact
          </h4>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "hello@luxuryhomes.studio", href: "mailto:hello@luxuryhomes.studio" },
              { label: "+1 (305) 555-0100", href: "tel:+13055550100" },
              { label: "Miami · New York · LA", href: "#" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    color: "rgba(249,249,249,0.4)",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(249,249,249,0.4)")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          borderTop: "1px solid var(--border)",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ color: "rgba(249,249,249,0.4)", fontSize: "0.8rem" }}>
          © 2026 Luxury Homes. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          {[
            {
              label: "Instagram",
              svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 7v7.47h-4.56V15.4c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.74 1.85-2.74 3.77V22H7.62V8z" />
                </svg>
              ),
            },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              aria-label={item.label}
              style={{
                width: 36,
                height: 36,
                border: "1px solid var(--border)",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(249,249,249,0.4)",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--gold)";
                el.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.color = "rgba(249,249,249,0.4)";
              }}
            >
              {item.svg}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
