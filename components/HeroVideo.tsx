"use client";

import { useEffect, useRef } from "react";
import { preload } from "react-dom";

const POSTER = "/hero-poster.jpg"; // first frame of the video, so the switch to playback is seamless

/**
 * Decorative hero loop. Playback starts from JS only when the visitor hasn't
 * asked for reduced motion; otherwise the poster stays and, with
 * preload="none", the 18 MB video is never downloaded.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  // The poster is the largest above-the-fold image: fetch it early.
  preload(POSTER, { as: "image", fetchPriority: "high" });

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.muted = true; // must be muted before play() for autoplay policies
    video.play().catch(() => {
      // Autoplay refused (e.g. iOS low-power mode): the poster stays visible.
    });
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      src="/Luxury%20Homes%20Hero.mp4"
      poster={POSTER}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
}
