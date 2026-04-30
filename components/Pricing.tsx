"use client";

import { useState } from "react";
import Reveal from "./RevealWrapper";
import BookingModal from "./BookingModal";

export default function Pricing() {
  const [activePlan, setActivePlan] = useState<string | null>(null);

  const open = (plan: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePlan(plan);
  };

  return (
    <section id="pricing">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div className="pricing-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end", marginBottom: "80px" }}>
          <Reveal>
            <div className="section-label">Investment</div>
            <h2>Every scope.<br /><em>One team.</em></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              From a first site to a full brokerage platform — we scope each project
              to what you actually need. All plans include hosting, SSL, and a training session.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>

            <div className="price-card">
              <span className="price-badge">Starter</span>
              <div className="price-name">Essentials</div>
              <p style={{ fontSize: "0.78rem", color: "rgba(242,237,230,0.4)", fontWeight: 300, lineHeight: 1.6 }}>
                The right foundation for agents ready to stop being invisible online.
              </p>
              <div className="price-divider" style={{ marginTop: 24 }} />
              <div className="price-features">
                {[
                  "Semi-custom premium design",
                  "Up to 5 sections",
                  "Property gallery (up to 10 listings)",
                  "Contact & WhatsApp forms",
                  "Mobile optimized",
                  "Domain + 1st year hosting",
                  "1 revision round",
                  "Delivered in 7–10 business days",
                ].map((f) => (
                  <div key={f} className="price-feat">
                    <div className="price-feat-dot" />{f}
                  </div>
                ))}
              </div>
              <a href="#" onClick={open("Essentials")} className="price-cta price-cta-hover">Book a call →</a>
            </div>

            <div className="price-card featured">
              <span className="price-badge">★ Most chosen</span>
              <div className="price-name">Professional</div>
              <p style={{ fontSize: "0.78rem", color: "rgba(242,237,230,0.4)", fontWeight: 300, lineHeight: 1.6 }}>
                For agents who want a site that works as hard as they do.
              </p>
              <div className="price-divider" style={{ marginTop: 24 }} />
              <div className="price-features">
                {[
                  "100% bespoke design",
                  "Unlimited sections",
                  "Property search with filtering",
                  "Self-managed listings panel",
                  "Blog / Market news module",
                  "Google Analytics setup",
                  "On-page SEO configured",
                  "2 revision rounds",
                  "60 days post-launch support",
                ].map((f) => (
                  <div key={f} className="price-feat">
                    <div className="price-feat-dot" />{f}
                  </div>
                ))}
              </div>
              <a href="#" onClick={open("Professional")} className="price-cta featured price-cta-hover">Book a call →</a>
            </div>

            <div className="price-card">
              <span className="price-badge">Enterprise</span>
              <div className="price-name">Brokerage</div>
              <p style={{ fontSize: "0.78rem", color: "rgba(242,237,230,0.4)", fontWeight: 300, lineHeight: 1.6 }}>
                For teams and brokerages that need a platform, not just a website.
              </p>
              <div className="price-divider" style={{ marginTop: 24 }} />
              <div className="price-features">
                {[
                  "Everything in Professional",
                  "Multi-agent profiles",
                  "Multi-user admin panel",
                  "CRM integration",
                  "Full corporate branding system",
                  "Team training session",
                  "Priority SLA support",
                  "Monthly strategy call",
                ].map((f) => (
                  <div key={f} className="price-feat">
                    <div className="price-feat-dot" />{f}
                  </div>
                ))}
              </div>
              <a href="#" onClick={open("Brokerage")} className="price-cta price-cta-hover">Book a call →</a>
            </div>

            <div className="price-card">
              <span className="price-badge">Real Estate</span>
              <div className="price-name">Developments</div>
              <p style={{ fontSize: "0.78rem", color: "rgba(242,237,230,0.4)", fontWeight: 300, lineHeight: 1.6 }}>
                Tailored digital presence for building developments, pre-sales, and real estate projects.
              </p>
              <div className="price-divider" style={{ marginTop: 24 }} />
              <div className="price-features">
                {[
                  "Project landing page & branding",
                  "Unit availability & floor plans",
                  "Interactive gallery & 3D renders",
                  "Pre-sale lead capture system",
                  "WhatsApp & email automation",
                  "Multilingual support",
                  "Virtual tour integration",
                  "Ongoing updates as project evolves",
                ].map((f) => (
                  <div key={f} className="price-feat">
                    <div className="price-feat-dot" />{f}
                  </div>
                ))}
              </div>
              <a href="#" onClick={open("Developments")} className="price-cta price-cta-hover">Book a call →</a>
            </div>

          </div>
        </Reveal>
      </div>

      {activePlan && (
        <BookingModal plan={activePlan} onClose={() => setActivePlan(null)} />
      )}
    </section>
  );
}
