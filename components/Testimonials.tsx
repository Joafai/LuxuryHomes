"use client";

import Reveal from "./RevealWrapper";

const testimonials = [
  {
    initials: "SW",
    name: "Sarah Williams",
    role: "Luxury Agent · Beverly Hills, CA",
    quote:
      "Within a week of launching my new site, I had 3 inbound leads from buyers I'd never met. The design instantly communicated the premium level of service I offer.",
  },
  {
    initials: "MR",
    name: "Marcus Rodriguez",
    role: "Top Producer · Miami Beach, FL",
    quote:
      "I used to cringe sharing my old website. Now I hand it to every client I meet. The Luxury Homes team understood my brand better than I did.",
  },
  {
    initials: "JL",
    name: "Jessica Liu",
    role: "Broker Associate · Manhattan, NY",
    quote:
      "They delivered my first draft in under 48 hours and it was stunning. The process was effortless — they handled everything while I focused on my clients.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "var(--dark)", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal>
            <span
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 16,
                display: "block",
              }}
            >
              Client Stories
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Agents Who{" "}
              <em style={{ color: "var(--gold)" }}>Elevated Their Brand</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              style={{
                color: "rgba(242,237,230,0.4)",
                fontSize: "1rem",
                maxWidth: 520,
                margin: "0 auto",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Real results from real estate professionals who chose to invest in their digital
              presence.
            </p>
          </Reveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="testi-grid"
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                style={{
                  background: "var(--ink)",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                  padding: 40,
                  transition: "border-color 0.3s, transform 0.3s",
                  cursor: "default",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--gold)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div style={{ color: "var(--gold-accent)", fontSize: "0.85rem", letterSpacing: 2, marginBottom: 8 }}>
                  ★★★★★
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "3rem",
                    color: "var(--gold-accent)",
                    lineHeight: 1,
                    marginBottom: 8,
                    opacity: 0.45,
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    color: "rgba(242,237,230,0.4)",
                    fontSize: "0.92rem",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    marginBottom: 28,
                    fontStyle: "italic",
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, rgba(201,169,110,0.6), rgba(201,169,110,0.9))",
                      border: "1px solid rgba(201,169,110,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1rem",
                      color: "var(--ink)",
                      fontWeight: 700,
                      minWidth: 44,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ color: "rgba(242,237,230,0.4)", fontSize: "0.78rem" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testi-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .testi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
