"use client";

import Reveal from "./RevealWrapper";
import { useBooking } from "./BookingContext";

const plans = [
  {
    tier: "Starter",
    name: "Essentials",
    desc: "The right foundation for agents ready to stop being invisible online.",
    features: [
      "Semi-custom premium design",
      "Single page, up to 5 sections",
      "Gallery, up to 10 listings",
      "Contact & booking forms",
      "1 revision round",
      "7–10 business days",
    ],
  },
  {
    tier: "Growth",
    name: "Professional",
    featured: true,
    desc: "For agents who want a site that works as hard as they do.",
    features: [
      "100% bespoke design",
      "Up to 5 pages, modular sections",
      "Property search with filters",
      "Self-managed listings panel",
      "Blog / market news",
      "Analytics + on-page SEO",
      "2 revision rounds",
    ],
  },
  {
    tier: "Teams",
    name: "Brokerage",
    desc: "For teams and brokerages that need a platform, not just a website.",
    features: [
      "Everything in Professional",
      "Two initial design proposals",
      "Multi-agent profiles",
      "Multi-user admin panel",
      "CRM integration",
      "Monthly strategy call",
    ],
  },
  {
    tier: "Projects",
    name: "New Developments",
    desc: "For developments, pre-sales and real estate projects.",
    features: [
      "Project landing & branding",
      "Two initial design proposals",
      "Units, availability & floor plans",
      "Pre-sale lead capture",
      "Multilingual support",
      "Virtual tour integration",
    ],
  },
];

export default function Pricing() {
  const { selectPlan } = useBooking();

  return (
    <section id="pricing" className="section" style={{ background: "var(--cream-deep)" }}>
      <div className="container">
        <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="eyebrow">Investment</p>
          <h2 className="title">
            Every scope. <em>One team.</em>
          </h2>
          <p className="lead" style={{ margin: "22px auto 0", maxWidth: 560 }}>
            From a first site to a full brokerage platform. Every plan includes hosting, SSL and a training session.
          </p>
        </Reveal>

        <div className="grid-4" style={{ gap: 20 }}>
          {plans.map((plan, i) => {
            const featured = Boolean(plan.featured);
            return (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div
                  className={featured ? "tone-dark" : undefined}
                  style={{
                    position: "relative",
                    height: "100%",
                    padding: "44px 34px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    background: featured ? "var(--ink)" : "var(--paper)",
                  }}
                >
                  {featured && (
                    <p
                      style={{
                        position: "absolute",
                        top: -14,
                        left: 34,
                        padding: "7px 14px",
                        background: "var(--gold)",
                        color: "var(--ink)",
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                      }}
                    >
                      Most chosen
                    </p>
                  )}
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: featured ? "var(--gold-light)" : "var(--gold-deep)",
                    }}
                  >
                    {plan.tier}
                  </p>
                  <h3 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: 34 }}>{plan.name}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: featured ? "var(--on-dark-muted)" : "var(--text-body)" }}>
                    {plan.desc}
                  </p>
                  <ul
                    style={{
                      flexGrow: 1,
                      paddingTop: 22,
                      borderTop: `1px solid ${featured ? "var(--line-on-dark)" : "var(--line-card)"}`,
                      display: "flex",
                      flexDirection: "column",
                      gap: 11,
                      fontSize: 15,
                      color: featured ? "var(--on-dark-soft)" : "var(--text-strong)",
                    }}
                  >
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a
                    href="#start"
                    onClick={() => selectPlan(plan.name)}
                    className={`btn btn-block ${featured ? "btn-gold" : "btn-outline"}`}
                  >
                    Book a call
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
