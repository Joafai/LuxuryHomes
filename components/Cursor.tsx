"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(animRing);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animRing);

    const grow = () => {
      cursor.style.width = "14px";
      cursor.style.height = "14px";
      ring.style.width = "56px";
      ring.style.height = "56px";
    };
    const shrink = () => {
      cursor.style.width = "8px";
      cursor.style.height = "8px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    const attach = () => {
      document.querySelectorAll("a, button, .service-card, .faq-item").forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };

    attach();

    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} className="cursor" />
      <div id="cursorRing" ref={ringRef} className="cursor-ring" />
    </>
  );
}
