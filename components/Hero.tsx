"use client";

import { useEffect, useRef } from "react";

const stats = [
  { prefix: "$", num: 20, suffix: "+", label: "US Markets Served" },
  { prefix: "", num: 94, suffix: "%", label: "Client Retention" },
  { prefix: "", num: 3, suffix: "×", label: "Avg. Lead Increase" },
  { prefix: "", num: 48, suffix: "h", label: "First Draft Delivery" },
];

function useCounterAnimation(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        container.querySelectorAll<HTMLSpanElement>("[data-target]").forEach((el) => {
          const target = parseInt(el.dataset.target || "0");
          const suffix = el.dataset.suffix || "";
          const prefix = el.dataset.prefix || "";
          const duration = 1800;
          let start: number | null = null;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = prefix + Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
        obs.disconnect();
      },
      { threshold: 0.5 }
    );
    obs.observe(container);
    return () => obs.disconnect();
  }, [containerRef]);
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  useCounterAnimation(statsRef);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 40px 80px",
        textAlign: "center",
      }}
    >
      {/* Video background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <video
          src="/Luxury%20Homes%20Hero.mp4"
          poster="/LH-photo.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Dark overlay so text stays readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(32,32,32,0.72) 0%, rgba(32,32,32,0.55) 40%, rgba(32,32,32,0.82) 100%)",
          }}
        />
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(188,207,201,0.06) 0%, transparent 70%)",
          }}
        />
      </div>
      {/* Subtle grid on top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(188,207,201,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(188,207,201,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      <div style={{ position: "relative", maxWidth: 860, width: "100%" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid rgba(188,207,201,0.25)",
            padding: "8px 20px",
            borderRadius: 100,
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold-accent)",
            marginBottom: 32,
            background: "rgba(188,207,201,0.05)",
          }}
        >
          <span
            className="animate-pulse-dot"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--gold-accent)",
              display: "inline-block",
            }}
          />
          Premium Digital Presence for Real Estate
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
            fontWeight: 600,
            marginBottom: 24,
            color: "#F9F9F9",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          Your Listings Deserve
          <br />
          <em style={{ color: "var(--gold)" }}>a Website That Sells</em>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.05rem",
            color: "#F9F9F9",
            maxWidth: 560,
            margin: "0 auto 48px",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          We craft bespoke, high-converting websites for elite real estate agents.
          <br />
          Designed to captivate buyers, build trust, and close deals faster.
        </p>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#cta"
            style={{
              background: "var(--gold)",
              color: "var(--dark)",
              padding: "16px 40px",
              border: "none",
              borderRadius: 2,
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), sans-serif",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold-light)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(188,207,201,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book a Free Consultation
          </a>
          <a
            href="#services"
            style={{
              background: "transparent",
              color: "#e8e8ec",
              padding: "16px 40px",
              border: "1px solid rgba(249,249,249,0.15)",
              borderRadius: 2,
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(249,249,249,0.15)";
              e.currentTarget.style.color = "#e8e8ec";
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{
            marginTop: 80,
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 5vw, 64px)",
            flexWrap: "wrap",
            borderTop: "1px solid var(--border)",
            paddingTop: 48,
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <span
                data-target={s.num}
                data-suffix={s.suffix}
                data-prefix={s.prefix}
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  display: "block",
                }}
              >
                {s.prefix}0{s.suffix}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(249,249,249,0.4)",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
