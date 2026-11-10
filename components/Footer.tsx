import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: "var(--night-deep)", color: "var(--paper)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 380 }}>
          <Image src="/brand/lh-logo-light.png" alt="Luxury Homes" width={176} height={36} />
          <p style={{ marginTop: 22, fontSize: 15, lineHeight: 1.7, color: "var(--on-dark-subtle)" }}>
            Premium websites for elite real estate agents. Beautiful, and built to perform.
          </p>
        </div>

        <address
          className="footer-links"
          style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: 12, fontSize: 15 }}
        >
          <a href="mailto:hello@luxuryhomes.studio">hello@luxuryhomes.studio</a>
          <a href="tel:+13055550100">+1 (305) 555-0100</a>
          <span style={{ color: "var(--on-dark-subtle)" }}>Miami · New York · Los Angeles</span>
        </address>
      </div>

      <p className="container" style={{ marginTop: 52, fontSize: 12, color: "var(--on-dark-dim)" }}>
        © 2026 Luxury Homes. All rights reserved.
      </p>
    </footer>
  );
}
