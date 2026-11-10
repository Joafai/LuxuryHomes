import Reveal from "./RevealWrapper";

const testimonials = [
  {
    quote:
      "I’d worked with two agencies before and both times ended up with something generic. They asked questions no one had ever asked me about my business. The result felt like me.",
    role: "Luxury agent · Beverly Hills, CA",
  },
  {
    quote:
      "My old site had my 2019 headshot and closed listings. Now I send the link before meetings, in my signature, everywhere. It does a lot of the selling before I get on the phone.",
    role: "Top producer · Miami Beach, FL",
  },
  {
    quote:
      "I pushed the call twice. Finally did it, 25 minutes, and two weeks later I had the site I’d been meaning to build for four years.",
    role: "Broker associate · Manhattan, NY",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <Reveal style={{ marginBottom: 60 }}>
          <p className="eyebrow">Client stories</p>
          <h2 className="title">
            Agents who <em>elevated their brand.</em>
          </h2>
        </Reveal>

        <div className="grid-3" style={{ gap: 24 }}>
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.1}>
              <figure
                style={{
                  margin: 0,
                  height: "100%",
                  padding: "44px 38px",
                  background: "var(--paper)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 30,
                }}
              >
                <blockquote style={{ margin: 0 }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: 25, lineHeight: 1.4 }}>“{t.quote}”</p>
                </blockquote>
                <figcaption
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold-deep)",
                  }}
                >
                  {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
