"use client";

import Reveal from "./RevealWrapper";

const services = [
  {
    tag: "Identity",
    title: "Agent Personal Brand Site",
    desc: "A signature website that positions you as the go-to agent in your market. Biographical storytelling, testimonials, and listings, all in one elegant platform.",
    features: ["Custom visual identity", "Testimonials & bio", "Listings feed"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
        <circle cx="14" cy="8" r="5" />
        <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10H4z" />
      </svg>
    ),
  },
  {
    tag: "Showcase",
    title: "Property Showcase Pages",
    desc: "Immersive single-property microsites with full-screen galleries, neighborhood maps, and compelling copy to maximize buyer interest.",
    features: ["Full-screen gallery", "Videos", "Neighborhood maps"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
        <rect x="2" y="6" width="24" height="16" rx="1" />
        <path d="M2 10l12 8 12-8" fill="none" stroke="currentColor" strokeWidth="0" />
        <circle cx="9" cy="12" r="2.5" fill="var(--ink)" />
        <path d="M2 22l7-7 4 4 4-5 9 8H2z" fill="var(--ink)" opacity="0.5" />
      </svg>
    ),
  },
  {
    tag: "Growth",
    title: "Lead Generation Funnels",
    desc: "Strategic landing pages built around your listings or territory, with email capture, valuation tools, and CRM integration to fill your pipeline on autopilot.",
    features: ["WhatsApp & email capture", "Valuation tools", "CRM integration"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
        <path d="M4 4h20l-8 10v8l-4-2V14L4 4z" />
      </svg>
    ),
  },
  {
    tag: "Performance",
    title: "Mobile-First Design",
    desc: "90% of buyers search on mobile. Your site is crafted pixel-perfect on every device. Fast, accessible, and optimized for Google's mobile-first index.",
    features: ["Sub-2s load time", "Touch-optimized UI", "Core Web Vitals"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
        <rect x="8" y="2" width="12" height="24" rx="2" />
        <circle cx="14" cy="22" r="1.2" fill="var(--ink)" />
        <rect x="11" y="4" width="6" height="1" rx="0.5" fill="var(--ink)" opacity="0.5" />
      </svg>
    ),
  },
  {
    tag: "Visibility",
    title: "SEO & Local Visibility",
    desc: "We embed on-page SEO, schema markup, and local keyword architecture so buyers searching in your area find you first; not your competition.",
    features: ["On-page SEO", "Schema markup", "Local keyword targeting"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
        <circle cx="12" cy="12" r="8" />
        <path d="M18.5 18.5L25 25" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="12" r="5" fill="var(--ink)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    tag: "Support",
    title: "Ongoing Maintenance",
    desc: "We handle updates, security, and performance monitoring so you never have to think about your website again. Just focus on closing deals.",
    features: ["Security & SSL", "Monthly updates", "Priority support"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
        <path d="M14 2L4 7v7c0 6 4.5 10.5 10 12 5.5-1.5 10-6 10-12V7L14 2z" />
        <path d="M9 14l3.5 3.5L19 10" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--ink)", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end", marginBottom: "80px" }}>
          <Reveal>
            <div className="section-label">What We Build</div>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(36px, 4.5vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--bone)",
            }}>
              Built for agents<br />who want to <em style={{ fontStyle: "italic", color: "var(--gold)" }}>stand out.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "rgba(249,249,249,0.5)", fontWeight: 300, alignSelf: "end" }}>
              Every service we offer is built around one goal: making you the most visible, most trusted agent in your market. No templates. No shortcuts.
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(188,207,201,0.1)" }}>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.1}>
              <div className="service-card">
                <div style={{
                  width: 52,
                  height: 52,
                  background: "rgba(188,207,201,0.08)",
                  border: "1px solid rgba(188,207,201,0.2)",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold)",
                  marginBottom: 28,
                }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>
                  {s.tag}
                </div>
                <h3 style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.45rem",
                  fontWeight: 400,
                  color: "var(--bone)",
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "rgba(249,249,249,0.45)", fontWeight: 300, marginBottom: 24 }}>
                  {s.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {s.features.map((f) => (
                    <div key={f} style={{ fontSize: "0.72rem", color: "rgba(249,249,249,0.35)", fontWeight: 300, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 16, height: 1, background: "var(--gold)", opacity: 0.4, flexShrink: 0, display: "inline-block" }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .service-card {
          background: var(--ink);
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
          transition: background 0.4s;
          cursor: default;
          height: 100%;
        }
        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: var(--gold);
          transition: width 0.5s ease;
        }
        .service-card:hover { background: rgba(188,207,201,0.04); }
        .service-card:hover::after { width: 100%; }
        @media (max-width: 768px) {
          .service-card { padding: 40px 32px; }
        }
      `}</style>
    </section>
  );
}
