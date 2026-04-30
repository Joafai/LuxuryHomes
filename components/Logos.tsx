"use client";

const brokerages = ["Sotheby's", "Christie's", "Compass", "Douglas Elliman", "Coldwell Banker", "RE/MAX"];

export default function Logos() {
  return (
    <div
      style={{
        padding: "60px 40px",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--ink)",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "0.72rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(242,237,230,0.4)",
          marginBottom: 40,
        }}
      >
        Trusted by agents from leading brokerages
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(24px, 4vw, 60px)",
          flexWrap: "wrap",
        }}
      >
        {brokerages.map((name) => (
          <span
            key={name}
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.08em",
              transition: "color 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(201,169,110,0.5)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.18)")
            }
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
