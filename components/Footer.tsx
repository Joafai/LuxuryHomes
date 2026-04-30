"use client";

const footerLinks = {
  Services: ["Brand Websites", "Property Showcases", "Lead Funnels", "SEO & Visibility", "Maintenance"],
  Company: ["About", "Our Process", "Pricing", "Case Studies", "Contact"],
};

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
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
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
              color: "rgba(242,237,230,0.4)",
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

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
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
              {title}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      color: "rgba(242,237,230,0.4)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      fontWeight: 300,
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(242,237,230,0.4)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

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
                    color: "rgba(242,237,230,0.4)",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(242,237,230,0.4)")}
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
        <p style={{ color: "rgba(242,237,230,0.4)", fontSize: "0.8rem" }}>
          © 2026 Luxury Homes. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          {["IG", "in", "𝕏"].map((icon) => (
            <a
              key={icon}
              href="#"
              aria-label={icon}
              style={{
                width: 36,
                height: 36,
                border: "1px solid var(--border)",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(242,237,230,0.4)",
                textDecoration: "none",
                fontSize: "0.82rem",
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
                el.style.color = "rgba(242,237,230,0.4)";
              }}
            >
              {icon}
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
