import Reveal from "./RevealWrapper";
import Placeholder from "./Placeholder";

// Bracketed text marks content to fill in once the client mockups exist.
const projects = [
  { shot: "Laptop mockup — client brand site", title: "[Client name] · Personal brand site", place: "[City, State]", wide: true },
  { shot: "Phone mockup — listing microsite", title: "[Listing] · Microsite", place: "[City]", wide: false },
];

export default function Work() {
  return (
    <section id="work" className="section tone-dark" style={{ background: "var(--night)" }}>
      <div className="container">
        <div className="section-head" style={{ marginBottom: 56 }}>
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2 className="title">
              Sites that feel like <em>the homes they sell.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="#start" className="link-underline">
              Start your project →
            </a>
          </Reveal>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className={p.wide ? "work-wide" : ""}>
              <figure style={{ margin: 0 }}>
                <Placeholder tone="dark" className="work-shot">
                  {p.shot}
                </Placeholder>
                <figcaption
                  style={{ marginTop: 18, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}
                >
                  <span style={{ fontFamily: "var(--display)", fontSize: 24 }}>{p.title}</span>
                  <span
                    style={{
                      alignSelf: "center",
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--on-dark-subtle)",
                    }}
                  >
                    {p.place}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
