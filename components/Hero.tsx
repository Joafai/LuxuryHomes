import HeroVideo from "./HeroVideo";

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
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
