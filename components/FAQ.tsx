import Reveal from "./RevealWrapper";

const faqs = [
  {
    q: "How long does it take?",
    a: "7 to 14 business days from proposal approval and first payment. Essentials usually ships in 7–10. You get a specific date in your proposal, and we hold to it.",
  },
  {
    q: "What do I need to get started?",
    a: "30 minutes for a discovery call. Bring your logo if you have one and your honest opinion of other agent websites. We handle structure, design, development and launch.",
  },
  {
    q: "Is there a monthly fee?",
    a: "Yes. Every plan has a low monthly maintenance fee from launch, covering hosting, SSL, security monitoring and up to two content updates a month. No surprise invoices, cancel anytime, and you own your site.",
  },
  {
    q: "Do you write the copy?",
    a: "On Professional and above, yes: a copywriting session for your headline, bio and services. On Essentials we give you a content brief that makes it easy.",
  },
  {
    q: "Will my site look like other agents’ sites?",
    a: "No. Every site is designed around your brand, market and clientele. Two agents in the same city could both work with us and look completely different.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 64 }}>
        <Reveal style={{ flex: "1 1 320px" }}>
          <p className="eyebrow">FAQ</p>
          <h2 className="title" style={{ fontSize: "clamp(40px, 4.6vw, 60px)", lineHeight: 1.04 }}>
            The questions everyone asks <em>first.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1} style={{ flex: "2 1 540px", minWidth: 0, borderTop: "1px solid var(--line-strong)" }}>
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                {item.q}
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, color: "var(--text-body)" }}>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
