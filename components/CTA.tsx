import Reveal from "./RevealWrapper";
import Placeholder from "./Placeholder";

export default function CTA() {
  return (
    <section id="cta" className="tone-dark" style={{ background: "var(--night)" }}>
      <div className="container cta-grid">
        <div className="cta-copy">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 22 }}>
              Ready when you are
            </p>
            <h2 className="title" style={{ fontSize: "clamp(44px, 5.4vw, 78px)", lineHeight: 1, letterSpacing: "-0.02em" }}>
              Your site could be <em>live in two weeks.</em>
            </h2>
            <p style={{ marginTop: 28, maxWidth: 480, fontSize: 18, lineHeight: 1.7, color: "var(--on-dark-muted)" }}>
              Most agents spend months thinking about it. A 30-minute call is all it takes to get started.
            </p>
            <div style={{ marginTop: 42, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#start" className="btn btn-gold-light">
                Book a call →
              </a>
              <a href="#start" className="btn btn-ghost">
                Get a quote
              </a>
            </div>
          </Reveal>
        </div>
        <Placeholder tone="dark" className="cta-shot">
          Client project — hero screenshot
        </Placeholder>
      </div>
    </section>
  );
}
