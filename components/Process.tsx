import Reveal from "./RevealWrapper";

const steps = [
  { num: "I", title: "Discovery call", desc: "We learn your brand, market, goals and aesthetic." },
  { num: "II", title: "Design concept", desc: "A full homepage concept, tailored to you, within 48 hours." },
  { num: "III", title: "Build & refine", desc: "We build every page, connect your CRM and refine the details." },
  { num: "IV", title: "Launch & grow", desc: "We go live, set up analytics and stay on as your digital partner." },
];

export default function Process() {
  return (
    <section id="process" className="section" style={{ background: "var(--cream-deep)" }}>
      <div className="container">
        <Reveal style={{ textAlign: "center", marginBottom: 72 }}>
          <p className="eyebrow">How it works</p>
          <h2 className="title">
            From brief to live <em>in four steps.</em>
          </h2>
        </Reveal>

        <Reveal>
          <ol className="grid-4" style={{ gap: 40 }}>
            {steps.map((s) => (
              <li key={s.num} style={{ borderTop: "1px solid var(--ink)", paddingTop: 28 }}>
                <p
                  aria-hidden="true"
                  style={{ fontFamily: "var(--serif)", fontSize: 48, lineHeight: 1, color: "var(--gold-deep)" }}
                >
                  {s.num}
                </p>
                <h3 style={{ marginTop: 16, fontFamily: "var(--display)", fontWeight: 400, fontSize: 26 }}>{s.title}</h3>
                <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.7, color: "var(--text-body)" }}>{s.desc}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
