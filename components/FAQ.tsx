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
    a: "Just 30 minutes for a discovery call. Bring your logo if you have one, a sense of the properties you represent, and your honest opinion of what you hate about other agent websites. We handle the rest — copy, structure, design, development, and deployment.",
  },
  {
    q: "Can I update the properties myself?",
    a: "Yes. Every site we build includes an admin panel where you can add, edit, highlight, or remove listings without touching a single line of code. We include a training session at launch so you can manage everything independently from day one.",
  },
  {
    q: "What if I don't like what you build?",
    a: "Revision rounds are built into every plan. We show you the site before it goes live and iterate until it feels right. If after revisions something still isn't working, we fix it — that's part of the service.",
  },
  {
    q: "Do you work with agents outside Argentina?",
    a: "Yes. We work with agents and brokers across Latin America — Mexico, Colombia, Chile, Uruguay, Paraguay, and beyond. The entire process is remote. Time zones have never been a problem and our team is bilingual.",
  },
  {
    q: "Is there a monthly fee after delivery?",
    a: "The first year of hosting, SSL, and security is included in every plan. From year two, we offer optional maintenance plans starting at a low monthly rate. There's no subscription lock-in — you own your website and can take it anywhere.",
  },
  {
    q: "Do you write the copy too?",
    a: "For the Professional and Brokerage plans, yes — we include a copywriting session where we help craft your headline, bio, and service descriptions. For the Essentials plan, we provide a content brief that makes writing your own text straightforward.",
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
