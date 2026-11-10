import type { CSSProperties, ReactNode } from "react";

interface Props {
  /** "light" for cream sections, "dark" for night sections. */
  tone?: "light" | "dark";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Striped stand-in for a client screenshot or mockup. Replace each one with a
 * next/image once the real asset exists; the label says what belongs there.
 */
export default function Placeholder({ tone = "light", className = "", style, children }: Props) {
  return (
    <div className={`ph ph-${tone} ${className}`} style={style}>
      {children}
    </div>
  );
}
