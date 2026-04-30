"use client";

import type { ReactNode } from "react";
import Reveal from "./RevealWrapper";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 9.5c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08A7.16 7.16 0 0110 14.5z"/>
      </svg>
    ),
    title: "Industry-Specific Expertise",
    desc: "Built exclusively for real estate agents. No learning curve — we hit the ground running.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 2L3 11h6v7l8-9h-6V2z"/>
      </svg>
    ),
    title: "48-Hour First Draft",
    desc: "Time is money in real estate. Your first design concept delivered in 2 business days.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 2a7 7 0 100 14A7 7 0 009 2zm3.7 5.3l-4 4a1 1 0 01-1.4 0l-2-2a1 1 0 011.4-1.4l1.3 1.29 3.3-3.3a1 1 0 011.4 1.41z"/>
      </svg>
    ),
    title: "Unlimited Revisions",
    desc: "We iterate until you're proud to share your URL. Zero compromise on quality.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 13h4v5H2v-5zm5-6h4v11H7V7zm5-5h4v16h-4V2z"/>
      </svg>
    ),
    title: "ROI-Focused Design",
    desc: "Every element is designed with one goal: converting visitors into qualified leads.",
  },
];

export default function Why() {
  return (
    <section id="why" style={{ background: "var(--dark)", padding: "100px 40px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="why-grid"
      >
        {/* Left */}
        <div>
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
              Why Luxury Homes
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
              We Speak the Language
              <br />
              <em style={{ color: "var(--gold)" }}>of Luxury Real Estate</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              style={{
                color: "rgba(242,237,230,0.4)",
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              Generic web agencies don&apos;t understand open houses, days on market, or why trust
              is the only currency that matters in high-end real estate. We do.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.1 * (i + 1)}>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: 20,
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    transition: "border-color 0.3s, background 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--gold)";
                    el.style.background = "rgba(201,169,110,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--border)";
                    el.style.background = "transparent";
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      background: "rgba(196,201,206,0.08)",
                      border: "1px solid rgba(196,201,206,0.2)",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold)",
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        color: "#fff",
                        fontSize: "0.95rem",
                        marginBottom: 4,
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {f.title}
                    </h4>
                    <p style={{ color: "rgba(242,237,230,0.4)", fontSize: "0.85rem", fontWeight: 300 }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right — browser mockup */}
        <Reveal className="why-visual-col">
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "var(--ink)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                overflow: "hidden",
                aspectRatio: "4/5",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                {[
                  { bg: "#ff5f57" },
                  { bg: "#febc2e" },
                  { bg: "#28c840" },
                ].map((dot, i) => (
                  <span
                    key={i}
                    style={{ width: 10, height: 10, borderRadius: "50%", background: dot.bg, display: "block" }}
                  />
                ))}
              </div>
              <div style={{ flex: 1, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                {[80, 60, 40].map((w) => (
                  <div
                    key={w}
                    style={{
                      height: 10,
                      borderRadius: 100,
                      background: "rgba(201,169,110,0.15)",
                      width: `${w}%`,
                    }}
                  />
                ))}
                <div
                  style={{
                    flex: 1,
                    background:
                      "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(201,169,110,0.02) 100%)",
                    border: "1px dashed var(--border)",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.8rem",
                    color: "rgba(201,169,110,0.2)",
                  }}
                >
                  LH
                </div>
                <div style={{ height: 10, borderRadius: 100, background: "rgba(201,169,110,0.15)", width: "100%" }} />
                <div style={{ height: 10, borderRadius: 100, background: "rgba(201,169,110,0.15)", width: "60%" }} />
              </div>
            </div>
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                bottom: -16,
                right: -16,
                background: "var(--gold)",
                color: "var(--dark)",
                padding: "20px 24px",
                borderRadius: 4,
                textAlign: "center",
              }}
            >
              <strong
                style={{
                  display: "block",
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                }}
              >
                48h
              </strong>
              <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                First Draft
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .why-visual-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}
