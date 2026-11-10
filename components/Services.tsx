import Reveal from "./RevealWrapper";

const services = [
  {
    title: "Agent personal brand site",
    desc: "A signature site that positions you as the go-to agent in your market: story, testimonials and listings in one elegant platform.",
    tags: "Identity · Bio · Listings feed",
  },
  {
    title: "Property microsites",
    desc: "Immersive single-listing pages with full-screen galleries, video, neighborhood maps and copy that books showings.",
    tags: "Gallery · Video · Maps",
  },
  {
    title: "Lead generation funnels",
    desc: "Landing pages around your listings or territory, with smart lead capture, valuation tools and CRM integration.",
    tags: "Capture · Valuation · CRM",
  },
  {
    title: "Mobile-first design",
    desc: "Most buyers search on their phone. Every page is fast, touch-friendly and tuned for Google’s mobile-first index.",
    tags: "Fast load · Core Web Vitals",
  },
  {
    title: "SEO & local search",
    desc: "On-page SEO, schema markup and local keyword architecture, so buyers in your area find you first.",
    tags: "On-page · Schema · Local",
  },
  {
    title: "Ongoing care",
    desc: "Hosting, security, updates and monitoring handled for you, so you can focus on closing deals.",
    tags: "SSL · Updates · Priority support",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 64 }}>
          <Reveal>
            <p className="eyebrow">What we build</p>
            <h2 className="title" style={{ maxWidth: 760 }}>
              Built for agents who want to <em>stand out.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead" style={{ maxWidth: 400 }}>
              One goal behind every service: make you the most visible, most trusted agent in your market. No
              templates. No shortcuts.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="service-grid">
            {services.map((s, i) => (
              <article key={s.title} className="service-card">
                <p style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--gold-deep)" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: 30, lineHeight: 1.12 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-body)" }}>{s.desc}</p>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--text-subtle)",
                  }}
                >
                  {s.tags}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
