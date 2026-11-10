import Placeholder from "./Placeholder";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-rule" style={{ marginBottom: 32 }}>
            Websites for luxury real estate
          </p>
          <h1
            className="title"
            style={{ fontSize: "clamp(50px, 6.6vw, 100px)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
          >
            Your listings deserve a website <em style={{ letterSpacing: "-0.01em" }}>that sells.</em>
          </h1>
          <p className="lead" style={{ marginTop: 32, maxWidth: 500, fontSize: 19, lineHeight: 1.65 }}>
            Bespoke, high-converting websites for elite agents and brokerages across the US. Designed to
            captivate buyers, build trust and close deals faster.
          </p>
          <div style={{ marginTop: 44, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#start" className="btn btn-dark">
              Book a call <span aria-hidden="true" className="btn-arrow">→</span>
            </a>
            <a href="#start" className="btn btn-outline">
              Get a quote
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <Placeholder style={{ position: "absolute", inset: 0 }}>
            Featured client site
            <br />
            Laptop + phone mockup of a recent project
          </Placeholder>
          <div className="hero-caption">
            <p style={{ fontFamily: "var(--display)", fontSize: 22, lineHeight: 1.2 }}>[Client name]</p>
            <p
              style={{
                marginTop: 6,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              [City, State] · Brand site
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
