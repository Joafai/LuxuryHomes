"use client";

import Reveal from "./RevealWrapper";

export default function CTA() {
  return (
    <section id="cta-final">
      <div className="cta-final-inner">
        <Reveal>
          <p className="cta-final-eyebrow">Ready when you are</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2>
            Your site<br />could be <em>live</em><br />in two weeks.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p>
            Most agents spend months thinking about it. The ones who book a call today
            are already getting inquiries by next month. The call is free. The decision is yours.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="cta-final-buttons">
            <a href="mailto:hello@luxuryhomes.studio" className="btn-dark">
              Book a free 30-min call
            </a>
            <a href="https://wa.me/" className="btn-outline-dark">
              Message us on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="cta-guarantee">
            No commitment required · Response within 24 hours · Available across Latin America
          </p>
        </Reveal>
      </div>
    </section>
  );
}
