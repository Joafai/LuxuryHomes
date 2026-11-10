import Reveal from "./RevealWrapper";

const stats = [
  { value: "48h", label: "First design concept" },
  { value: "7–14", label: "Business days to launch" },
  { value: "100%", label: "Bespoke, no templates" },
  { value: "50", label: "States we build for" },
];

export default function TrustStrip() {
  return (
    <section aria-label="At a glance" className="trust">
      <Reveal>
        <div className="container trust-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <p style={{ fontFamily: "var(--display)", fontSize: 54 }}>{s.value}</p>
              <p
                style={{
                  marginTop: 8,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
