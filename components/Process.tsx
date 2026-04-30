"use client";

import Reveal from "./RevealWrapper";

const steps = [
  {
    num: "I",
    title: "Discovery Call",
    desc: "We learn your brand, your market, your goals, and your aesthetic vision. No forms — just a real conversation.",
  },
  {
    num: "II",
    title: "Design Concept",
    desc: "Within 48 hours, you receive a full homepage design concept tailored to your personal brand.",
  },
  {
    num: "III",
    title: "Build & Refine",
    desc: "We develop all pages, integrate your CRM, and iterate until every detail is perfect.",
  },
  {
    num: "IV",
    title: "Launch & Grow",
    desc: "We go live, set up analytics, and stay on as your digital partner for ongoing growth.",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ background: "var(--ink)", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
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
              How It Works
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
              From Brief to Live
              <br />
              <em style={{ color: "var(--gold)" }}>in Four Steps</em>
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
              A streamlined, proven process that respects your time and delivers results without
              back-and-forth chaos.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            position: "relative",
          }}
          className="process-steps"
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 36,
              left: "calc(12.5% + 36px)",
              right: "calc(12.5% + 36px)",
              height: 1,
              background: "linear-gradient(90deg, var(--gold), rgba(201,169,110,0.2), var(--gold))",
            }}
            className="process-line"
          />

          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1} style={{ padding: "0 20px 40px", textAlign: "center" }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  border: "1px solid var(--border)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.6rem",
                  color: "var(--gold)",
                  background: "var(--ink)",
                  position: "relative",
                  zIndex: 1,
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "var(--gold)";
                  el.style.color = "var(--dark)";
                  el.style.borderColor = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "var(--ink)";
                  el.style.color = "var(--gold)";
                  el.style.borderColor = "var(--border)";
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1rem",
                  color: "#fff",
                  marginBottom: 12,
                }}
              >
                {s.title}
              </h3>
              <p style={{ color: "rgba(242,237,230,0.4)", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-steps { grid-template-columns: repeat(2, 1fr) !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .process-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
