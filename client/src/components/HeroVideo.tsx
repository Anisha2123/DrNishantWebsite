import { useRef, useState, useEffect } from "react";

/*
  HeroVideo — pure cinematic video, zero text, zero overlay
  ──────────────────────────────────────────────────────────
  Desktop / Tablet (≥ 768px)
    • Landscape video
    • 16:9 aspect, fills full width
    • height clamped 500px – 100vh

  Mobile (< 768px)
    • Portrait video
    • 100dvh (dynamic viewport height) — fills the ENTIRE
      screen including below the URL bar on iOS/Android
    • object-fit: cover, object-position: center top
    • No height truncation — uses 100svh fallback chain

  Both
    • autoPlay · muted · loop · playsInline
    • Fade-in after canplay fires (opacity 0 → 1)
    • Minimal frosted-glass play / mute controls only
    • Zero text, zero gradient overlay, zero scrim
    • Self-contained <style> block
*/

const VIDEO = {
  landscape: "/videos/hero_video_landscape.mp4",
  portrait:  "/videos/hero_video_potrait.mp4",
};

export default function HeroVideo() {
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef  = useRef<HTMLVideoElement>(null);

  const [muted,         setMuted]         = useState(true);
  const [playing,       setPlaying]       = useState(true);
  const [desktopLoaded, setDesktopLoaded] = useState(false);
  const [mobileLoaded,  setMobileLoaded]  = useState(false);

  /* Autoplay both on mount */
  useEffect(() => {
    [desktopRef, mobileRef].forEach(r => {
      if (!r.current) return;
      r.current.muted = true;
      r.current.play().catch(() => {});
    });
    setPlaying(true);
  }, []);

  const toggleMute = () => {
    const next = !muted;
    [desktopRef, mobileRef].forEach(r => {
      if (r.current) r.current.muted = next;
    });
    setMuted(next);
  };

  const togglePlay = () => {
    const next = !playing;
    [desktopRef, mobileRef].forEach(r => {
      if (!r.current) return;
      next ? r.current.play().catch(() => {}) : r.current.pause();
    });
    setPlaying(next);
  };

  /* ── icons ────────────────────────────────────── */
  const Play  = () => (
    <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
      <path d="M1 1.5l9 5-9 5V1.5z" fill="white" stroke="white" strokeWidth=".4" strokeLinejoin="round"/>
    </svg>
  );
  const Pause = () => (
    <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
      <rect x="1"   y="1" width="3" height="11" rx=".75" fill="white"/>
      <rect x="7"   y="1" width="3" height="11" rx=".75" fill="white"/>
    </svg>
  );
  const Mute  = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 5H5L9 2v10l-4-3H2V5z" fill="white"/>
      <path d="M11 4.5l2 2m0-2l-2 2" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
  const Sound = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 5H5L9 2v10l-4-3H2V5z" fill="white"/>
      <path d="M11 4.5c.8.7 1.2 1.6 1.2 2.5s-.4 1.8-1.2 2.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );

  const styles = `
    /* ── Reset & wrap ─────────────────────────────── */
    .hv { width: 100%; display: block; overflow: hidden; background: #000; }
    .hv *, .hv *::before, .hv *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* ══════════════════════════════════════════════
       DESKTOP / TABLET  ≥ 768px
    ══════════════════════════════════════════════ */
    .hv-d {
      display: none;
      position: relative;
      width: 100%;
      /* 16:9 but clamp height so it never goes short or too tall */
      aspect-ratio: 16 / 9;
      min-height: 500px;
      max-height: 100vh;
      overflow: hidden;
      background: #000;
    }
    @media (min-width: 768px) { .hv-d { display: block; } }

    .hv-d-video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      display: block;
      /* Start invisible, fade in when ready */
      opacity: 0;
      transition: opacity 1.2s ease;
      /* Ensure crisp rendering */
      image-rendering: high-quality;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    .hv-d-video.on { opacity: 1; }

    /* Loading shimmer — hidden once video fades in */
    .hv-shimmer {
      position: absolute; inset: 0;
      background: linear-gradient(100deg, #0a1210 0%, #111e1b 40%, #0f1a17 60%, #0a1210 100%);
      background-size: 300% 100%;
      animation: hvShimmer 2s ease-in-out infinite;
      transition: opacity .6s ease;
    }
    .hv-shimmer.off { opacity: 0; pointer-events: none; }

    /* Controls — top-right, minimal */
    .hv-d-ctrl {
      position: absolute;
      top: 1.25rem;
      right: 1.5rem;
      display: flex;
      gap: .5rem;
      z-index: 10;
      opacity: 0;
      animation: hvFadeIn .5s 1.4s ease forwards;
    }

    /* ══════════════════════════════════════════════
       MOBILE  < 768px
       Portrait video fills 100% of the viewport —
       including the area under the browser chrome
    ══════════════════════════════════════════════ */
    .hv-m {
      display: block;
      position: relative;
      width: 100%;
      /* Full screen height chain:
         100dvh — dynamic viewport (shrinks with browser chrome)
         100svh — small viewport (always full without chrome)
         100vh  — fallback
         We want the video to fill to the bottom of the screen,
         so 100svh (small = safe minimum) is ideal.               */
      height: 100svh;
      height: 100dvh;
      min-height: 100vh; /* hard fallback */
      overflow: hidden;
      background: #000;
    }
    @media (min-width: 768px) { .hv-m { display: none; } }

    .hv-m-video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* Top-center keeps the most important content (faces, action) visible */
      object-position: center top;
      display: block;
      opacity: 0;
      transition: opacity 1.2s ease;
      image-rendering: high-quality;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    .hv-m-video.on { opacity: 1; }

    /* Controls — bottom-right on mobile */
    .hv-m-ctrl {
      position: absolute;
      bottom: 1.5rem;
      right: 1rem;
      display: flex;
      gap: .4rem;
      z-index: 10;
      opacity: 0;
      animation: hvFadeIn .5s 1.4s ease forwards;
    }

    /* ── Shared: control button ───────────────────── */
    .hv-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.38);
      border: 1px solid rgba(255, 255, 255, 0.22);
      color: #fff;
      cursor: pointer;
      transition: background 0.2s;
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }
    .hv-btn:hover  { background: rgba(0, 0, 0, 0.6); }
    .hv-btn:active { background: rgba(0, 0, 0, 0.75); }

    /* Smaller variant for mobile */
    .hv-btn-sm {
      width: 2rem;
      height: 2rem;
    }

    /* ── Keyframes ──────────────────────────────────── */
    @keyframes hvShimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @keyframes hvFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="hv">

        {/* ══ DESKTOP / TABLET ══════════════════════════ */}
        <div className="hv-d">

          {/* Loading shimmer */}
          <div
            className={`hv-shimmer${desktopLoaded ? " off" : ""}`}
            aria-hidden="true"
          />

          {/* Landscape video — pure, no overlay */}
          <video
            ref={desktopRef}
            className={`hv-d-video${desktopLoaded ? " on" : ""}`}
            src={VIDEO.landscape}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setDesktopLoaded(true)}
            aria-label="MISSO Robotic Knee Replacement — surgical procedure"
          />

          {/* Controls only */}
          <div className="hv-d-ctrl" aria-label="Video controls">
            <button
              className="hv-btn"
              onClick={togglePlay}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? <Pause /> : <Play />}
            </button>
            <button
              className="hv-btn"
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? <Mute /> : <Sound />}
            </button>
          </div>

        </div>

        {/* ══ MOBILE ════════════════════════════════════ */}
        <div className="hv-m">

          {/* Portrait video — full screen, no clip */}
          <video
            ref={mobileRef}
            className={`hv-m-video${mobileLoaded ? " on" : ""}`}
            src={VIDEO.portrait}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setMobileLoaded(true)}
            aria-label="MISSO Robotic Knee Replacement — surgical procedure"
          />

          {/* Controls only — bottom-right */}
          <div className="hv-m-ctrl" aria-label="Video controls">
            <button
              className="hv-btn hv-btn-sm"
              onClick={togglePlay}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? <Pause /> : <Play />}
            </button>
            <button
              className="hv-btn hv-btn-sm"
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? <Mute /> : <Sound />}
            </button>
          </div>

        </div>

      </div>
    </>
  );
}