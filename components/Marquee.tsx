"use client";

import Image from "next/image";

const logos = [1, 2, 3, 4, 5];
const doubled = [...logos, ...logos];

export default function Marquee() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((n, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
            <Image
              src={`/Logos/${n}.png`}
              alt={`Logo ${n}`}
              width={120}
              height={40}
              style={{ objectFit: "contain", opacity: 0.35, filter: "brightness(0) invert(1)" }}
            />
            <span style={{ color: "var(--gold)", opacity: 0.4, fontSize: "1.2rem", lineHeight: 1, margin: "0 56px" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
