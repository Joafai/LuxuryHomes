import Reveal from "./RevealWrapper";
import Placeholder from "./Placeholder";

const points = [
  { title: "Real estate only", desc: "Built exclusively for agents. No learning curve." },
  { title: "Fast, on our word", desc: "A concept in 2 business days and a launch date we hold to." },
  { title: "Launch when you love it", desc: "Nothing goes live until you’re proud to share it." },
  { title: "Built to convert", desc: "Every element earns its place by turning visitors into leads." },
];

export default function Why() {
  return (
    <section id="why" className="section section-roomy">
      <div className="container why-grid">
        <Reveal className="why-media">
          <Placeholder className="why-shot">Client site — full-page screenshot</Placeholder>
          <Placeholder className="why-mobile">Mobile view</Placeholder>
        </Reveal>

        <div className="why-copy">
          <Reveal>
            <p className="eyebrow">Why Luxury Homes</p>
            <h2 className="title" style={{ fontSize: "clamp(40px, 4.6vw, 64px)", lineHeight: 1.04 }}>
              We speak the language <em>of luxury real estate.</em>
            </h2>
            <p className="lead" style={{ marginTop: 26 }}>
              Generic agencies don’t understand open houses, days on market, or why trust is the only currency
              in high-end real estate. We do.
            </p>
          </Reveal>

          <div className="why-points">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.1 * (i + 1)} style={{ borderTop: "1px solid var(--gold)", paddingTop: 20 }}>
                <h3 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: 23 }}>{p.title}</h3>
                <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: "var(--text-body)" }}>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
