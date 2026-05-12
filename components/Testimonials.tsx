"use client";

import Reveal from "./RevealWrapper";

const testimonials = [
  {
    role: "Luxury Agent · Beverly Hills, CA",
    quote:
      "Honestly, I was skeptical. I'd worked with two agencies before and both times I ended up with something that felt generic. This was completely different, they asked questions no one had ever asked me about my business. The result felt like me, not a template.",
  },
  {
    role: "Top Producer · Miami Beach, FL",
    quote:
      "My old site had my 2019 headshot and listings that had already closed. I knew it was bad but kept pushing it off. Now I actually send the link proactively, before meetings, in my email signature, everywhere. It does a lot of the selling before I even get on the phone.",
  },
  {
    role: "Broker Associate · Manhattan, NY",
    quote:
      "I almost didn't do it. The timing felt off, I had three listings active and didn't want the distraction. I pushed the call twice. Finally did it, took maybe 25 minutes, and two weeks later I had a site I'd been meaning to build for four years. I wish I'd done it when I first thought about it.",
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
                color: "#F9F9F9",
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
                color: "rgba(249,249,249,0.4)",
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
            <Reveal key={t.role} delay={i * 0.1}>
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
                    color: "rgba(249,249,249,0.4)",
                    fontSize: "0.92rem",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    marginBottom: 28,
                    fontStyle: "italic",
                  }}
                >
                  {t.quote}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "rgba(249,249,249,0.55)",
                    fontSize: "0.82rem",
                    fontWeight: 400,
                  }}
                >
                  <span style={{ color: "var(--gold)" }}>—</span>
                  <span>{t.role}</span>
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
