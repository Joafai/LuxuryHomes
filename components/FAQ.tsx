"use client";

import { useState } from "react";
import Reveal from "./RevealWrapper";

const faqs = [
  {
    q: "How long does it actually take?",
    a: "Between 7 and 14 business days from the moment you approve the proposal and make the first payment. The Essentials plan typically ships in 7–10 days. We'll give you a specific date in your proposal — and we hold to it.",
  },
  {
    q: "What do I need to get started?",
    a: "Just 30 minutes for a discovery call. Bring your logo if you have one, a sense of the properties you represent, and your honest opinion of what you hate about other agent websites. We handle the rest: copy, structure, design, development, and deployment.",
  },
  {
    q: "Is there a monthly fee after delivery?",
    a: "The first year of hosting, SSL, and security is included in every plan. From year two, we offer optional maintenance plans starting at a low monthly rate. There's no subscription lock-in — you own your website and can take it anywhere.",
  },
  {
    q: "Do you write the copy too?",
    a: "For the Professional and Brokerage plans, yes, we include a copywriting session where we help craft your headline, bio, and service descriptions. For the Essentials plan, we provide a content brief that makes writing your own text straightforward.",
  },
  {
    q: "Will my site look like other agents' sites you've built?",
    a: "No. Every site is built from scratch around your brand, your market, and your clientele. We don't reuse layouts, color systems, or copy. Two agents in the same city could both work with us and have completely different sites, that's the point.",
  },
  {
    q: "What happens if I want to add something after launch?",
    a: "Small updates, a new listing, a headshot swap, a bio tweak, are covered in your first year. For larger additions like a new section, a landing page, or a redesigned block, we scope it and quote it separately. Most post-launch requests turn around in 48 hours.",
  },
  {
    q: "Is there a monthly fee after delivery?",
    a: "Yes, all plans include a low monthly maintenance fee that covers hosting, SSL, security monitoring, and up to two content updates per month. There's no surprise invoice at the end of year one. You know exactly what you're paying from day one, and you can cancel anytime, you own your site and can take it anywhere.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="faq-inner">
          <Reveal>
            <div className="faq-left">
              <span
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: 28,
                }}
              >
                FAQ
              </span>
              <h2>
                The questions<br />everyone<br />asks <em>first.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="faq-list">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className={`faq-item${openIndex === i ? " open" : ""}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="faq-question">
                    <h4>{item.q}</h4>
                    <div className="faq-toggle">+</div>
                  </div>
                  <div className="faq-answer">{item.a}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
