import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="site-header" style={{ borderBottom: "1px solid var(--line-soft)" }}>
      <div
        className="container"
        style={{
          padding: "22px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <a href="#top" aria-label="Luxury Homes home" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/brand/lh-logo-dark.png" alt="Luxury Homes" width={166} height={34} loading="eager" />
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#start" className="btn btn-dark btn-sm">
          Book a call
        </a>
      </div>
    </header>
  );
}
