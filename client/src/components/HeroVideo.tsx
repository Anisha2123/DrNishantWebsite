import { useRef, useState, useEffect } from "react";

/*
  HeroVideo
  ─────────────────────────────────────────────────────────
  • Desktop / Tablet (≥ 768px) → landscape video, full-width
    cinematic banner with an overlay of text + CTA
  • Mobile (< 768px)           → portrait video, tall card
    layout with text below the video
  • Self-contained <style> block — zero external CSS deps
  • All transitions / animations are pure CSS
  • Video: autoplay, muted, loop, playsInline for iOS
  ─────────────────────────────────────────────────────────
*/

const VIDEO = {
  landscape: "/videos/hero_video_landscape.mp4",
  portrait:  "/videos/hero_video_potrait.mp4",
};

export default function HeroVideo() {
  const videoRef  = useRef<HTMLVideoElement>(null);
  const [muted,   setMuted]   = useState(true);
  const [playing, setPlaying] = useState(true);
  const [loaded,  setLoaded]  = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile breakpoint */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  /* Attempt autoplay */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [isMobile]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else         { videoRef.current.play();  setPlaying(true);  }
  };

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

    /* ── wrapper ──────────────────────────────────────── */
    .hv-wrap {
      width: 100%;
      font-family: 'DM Sans', sans-serif;
      background: #080f0e;
    }

    /* ══════════════════════════════════════════════════
       DESKTOP / TABLET  ≥ 768px
       Full-width cinematic banner, text over video
    ══════════════════════════════════════════════════ */
    .hv-desktop {
      display: none;
      position: relative;
      width: 100%;
      /* 16:9 aspect — clamp so it never crushes or balloons */
      aspect-ratio: 16 / 7;
      min-height: 420px;
      max-height: 680px;
      overflow: hidden;
      background: #080f0e;
    }
    @media (min-width: 768px) { .hv-desktop { display: block; } }

    .hv-desktop-video {
      position: absolute;
      inset: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center;
      opacity: 0;
      transition: opacity 1s ease;
    }
    .hv-desktop-video.loaded { opacity: 1; }

    /* gradient overlay — dark at edges, lighter centre */
    .hv-desktop-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(to right,  rgba(8,15,14,.82) 0%, rgba(8,15,14,.1) 55%, transparent 100%),
        linear-gradient(to bottom, rgba(8,15,14,.3)  0%, transparent 40%,  rgba(8,15,14,.6) 100%);
      pointer-events: none;
    }

    /* text block — left-aligned */
    .hv-desktop-text {
      position: absolute;
      top: 50%; left: 0;
      transform: translateY(-50%);
      padding: 0 5vw;
      max-width: 560px;
      animation: hvFadeUp .9s .3s cubic-bezier(.22,1,.36,1) both;
    }

    .hv-kicker {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 10px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase;
      color: #3aa899;
      background: rgba(58,168,153,.12);
      border: 1px solid rgba(58,168,153,.28);
      border-radius: 100px;
      padding: .25rem .875rem;
      margin-bottom: 1rem;
    }
    .hv-kicker-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #3aa899;
      animation: hvPulse 2s ease-in-out infinite;
    }

    .hv-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2.2rem, 4vw, 3.4rem);
      font-weight: 300;
      color: #fff;
      line-height: 1.08;
      letter-spacing: -.015em;
      margin: 0 0 1rem;
    }
    .hv-title em { font-style: italic; color: #5ec9b8; }

    .hv-sub {
      font-size: clamp(.85rem, 1.2vw, 1rem);
      color: rgba(255,255,255,.65);
      line-height: 1.7;
      margin: 0 0 1.75rem;
      max-width: 42ch;
    }

    .hv-cta-row { display: flex; gap: .75rem; align-items: center; flex-wrap: wrap; }

    .hv-cta-primary {
      display: flex; align-items: center; gap: 7px;
      padding: .75rem 1.625rem; min-height: 46px;
      background: #2D8C7F; color: #fff;
      border: none; border-radius: 100px;
      font-family: 'DM Sans', sans-serif; font-size: .875rem; font-weight: 600;
      cursor: pointer; white-space: nowrap;
      box-shadow: 0 4px 20px rgba(45,140,127,.45);
      transition: background .2s, transform .15s;
      letter-spacing: .01em;
    }
    .hv-cta-primary:hover  { background: #3aa899; transform: translateY(-1px); }
    .hv-cta-primary:active { transform: scale(.97); }

    .hv-cta-ghost {
      display: flex; align-items: center; gap: 7px;
      padding: .75rem 1.375rem; min-height: 46px;
      background: rgba(255,255,255,.08);
      color: rgba(255,255,255,.85);
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 100px;
      font-family: 'DM Sans', sans-serif; font-size: .875rem; font-weight: 500;
      cursor: pointer; white-space: nowrap;
      transition: background .2s, border-color .2s;
    }
    .hv-cta-ghost:hover { background: rgba(255,255,255,.14); border-color: rgba(255,255,255,.35); }

    /* video controls — bottom right */
    .hv-controls {
      position: absolute;
      bottom: 1.25rem; right: 1.5rem;
      display: flex; gap: .5rem;
      animation: hvFadeUp .7s .8s ease both;
    }
    .hv-ctrl-btn {
      width: 2.25rem; height: 2.25rem;
      border-radius: 50%;
      background: rgba(255,255,255,.1);
      border: 1px solid rgba(255,255,255,.2);
      color: #fff; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background .2s;
      -webkit-tap-highlight-color: transparent;
    }
    .hv-ctrl-btn:hover { background: rgba(255,255,255,.2); }

    /* loading shimmer */
    .hv-shimmer {
      position: absolute; inset: 0;
      background: linear-gradient(90deg, #0d1d1b 25%, #142420 50%, #0d1d1b 75%);
      background-size: 200% 100%;
      animation: hvShimmer 1.6s ease-in-out infinite;
    }
    .hv-shimmer.hidden { display: none; }

    /* bottom stat bar */
    .hv-stat-bar {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      display: flex; gap: 0;
      border-top: 1px solid rgba(255,255,255,.07);
      background: rgba(8,15,14,.55);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      animation: hvFadeUp .7s 1s ease both;
    }
    .hv-stat-item {
      flex: 1; padding: .875rem 1.25rem;
      border-right: 1px solid rgba(255,255,255,.06);
    }
    .hv-stat-item:last-child { border-right: none; }
    .hv-stat-val {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.375rem; font-weight: 300; color: #fff; line-height: 1;
      margin-bottom: 2px;
    }
    .hv-stat-lbl {
      font-size: 9px; font-weight: 600; letter-spacing: .14em;
      text-transform: uppercase; color: rgba(255,255,255,.42);
    }

    /* ══════════════════════════════════════════════════
       MOBILE  < 768px
       Portrait video as a tall card, text below
    ══════════════════════════════════════════════════ */
    .hv-mobile {
      display: block;
      background: #080f0e;
    }
    @media (min-width: 768px) { .hv-mobile { display: none; } }

    .hv-mobile-video-wrap {
      position: relative;
      width: 100%;
      /* 9:16 portrait — full bleed */
      aspect-ratio: 9 / 16;
      max-height: 72svh;
      max-height: 72vh;
      overflow: hidden;
      background: #0d1d1b;
    }

    .hv-mobile-video {
      position: absolute;
      inset: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center top;
      opacity: 0;
      transition: opacity .9s ease;
    }
    .hv-mobile-video.loaded { opacity: 1; }

    /* subtle gradient at bottom to bleed into the text panel */
    .hv-mobile-fade {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 40%;
      background: linear-gradient(to bottom, transparent, #080f0e);
      pointer-events: none;
    }

    /* mobile controls — overlay bottom-right */
    .hv-mobile-controls {
      position: absolute;
      bottom: .875rem; right: .875rem;
      display: flex; gap: .4rem;
    }
    .hv-ctrl-btn-sm {
      width: 2rem; height: 2rem;
      border-radius: 50%;
      background: rgba(0,0,0,.45);
      border: 1px solid rgba(255,255,255,.18);
      color: #fff; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }

    /* text panel below video */
    .hv-mobile-text {
      padding: 1.5rem 1.25rem 2rem;
      animation: hvFadeUp .8s .2s cubic-bezier(.22,1,.36,1) both;
    }

    .hv-mobile-kicker {
      display: inline-flex; align-items: center; gap: 5px;
      font-size: 9px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
      color: #3aa899;
      background: rgba(58,168,153,.12);
      border: 1px solid rgba(58,168,153,.25);
      border-radius: 100px;
      padding: .2rem .75rem;
      margin-bottom: .875rem;
    }
    .hv-mobile-kicker-dot { width: 5px; height: 5px; border-radius: 50%; background: #3aa899; animation: hvPulse 2s ease-in-out infinite; }

    .hv-mobile-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(1.9rem, 8vw, 2.4rem);
      font-weight: 300;
      color: #fff;
      line-height: 1.1;
      letter-spacing: -.01em;
      margin: 0 0 .75rem;
    }
    .hv-mobile-title em { font-style: italic; color: #5ec9b8; }

    .hv-mobile-sub {
      font-size: .875rem;
      color: rgba(255,255,255,.55);
      line-height: 1.7;
      margin: 0 0 1.5rem;
    }

    .hv-mobile-cta-row { display: flex; gap: .625rem; flex-direction: column; }

    .hv-mobile-cta-primary {
      display: flex; align-items: center; justify-content: center; gap: 7px;
      padding: .875rem; min-height: 48px;
      background: #2D8C7F; color: #fff;
      border: none; border-radius: .875rem;
      font-family: 'DM Sans', sans-serif; font-size: .9rem; font-weight: 600;
      cursor: pointer; width: 100%;
      box-shadow: 0 4px 20px rgba(45,140,127,.4);
      transition: background .2s;
      -webkit-appearance: none; touch-action: manipulation;
    }
    .hv-mobile-cta-primary:hover  { background: #3aa899; }
    .hv-mobile-cta-primary:active { opacity: .88; }

    .hv-mobile-cta-ghost {
      display: flex; align-items: center; justify-content: center; gap: 7px;
      padding: .875rem; min-height: 48px;
      background: rgba(255,255,255,.06);
      color: rgba(255,255,255,.75);
      border: 1px solid rgba(255,255,255,.15);
      border-radius: .875rem;
      font-family: 'DM Sans', sans-serif; font-size: .9rem; font-weight: 500;
      cursor: pointer; width: 100%;
      transition: background .2s;
      -webkit-appearance: none; touch-action: manipulation;
    }
    .hv-mobile-cta-ghost:hover { background: rgba(255,255,255,.11); }

    /* stat strip — mobile */
    .hv-mobile-stats {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: .5rem; margin-top: 1.25rem;
    }
    .hv-mobile-stat {
      background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: .75rem;
      padding: .75rem 1rem;
    }
    .hv-mobile-stat-val {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.375rem; font-weight: 300; color: #fff; line-height: 1; margin-bottom: 2px;
    }
    .hv-mobile-stat-lbl {
      font-size: 9px; font-weight: 600; letter-spacing: .12em;
      text-transform: uppercase; color: rgba(255,255,255,.38);
    }

    /* ── Keyframes ────────────────────────────────────── */
    @keyframes hvFadeUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0);    }
    }
    @keyframes hvPulse {
      0%, 100% { opacity: 1; transform: scale(1);    }
      50%       { opacity: .4; transform: scale(.65); }
    }
    @keyframes hvShimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;

  const STATS = [
    { val: "<1mm",  lbl: "Surgical Accuracy"    },
    { val: "3D CT", lbl: "Pre-Op Planning"      },
    { val: "100%",  lbl: "Personalised"         },
    { val: "5-Step",lbl: "Guided Process"       },
  ];

  /* ── SVG icons ──────────────────────────────────── */
  const PlayIcon = () => (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <path d="M1 1.5l10 5-10 5V1.5z" fill="white" stroke="white" strokeWidth=".5" strokeLinejoin="round"/>
    </svg>
  );
  const PauseIcon = () => (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <rect x="1" y="1" width="3.5" height="12" rx="1" fill="white"/>
      <rect x="7.5" y="1" width="3.5" height="12" rx="1" fill="white"/>
    </svg>
  );
  const MuteIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 5H5L9 2v10l-4-3H2V5z" fill="white"/>
      <path d="M11 4l2 2m0-2l-2 2" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
  const UnmuteIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 5H5L9 2v10l-4-3H2V5z" fill="white"/>
      <path d="M11 4.5c.7.6 1 1.4 1 2.5s-.3 1.9-1 2.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
  const ArrowIcon = () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M1.5 6.5h10M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <style>{styles}</style>
      <div className="hv-wrap">

        {/* ══ DESKTOP / TABLET ══════════════════════════════ */}
        <div className="hv-desktop">

          {/* Loading shimmer */}
          <div className={`hv-shimmer${loaded ? " hidden" : ""}`} aria-hidden="true" />

          {/* Landscape video */}
          <video
            ref={videoRef}
            className={`hv-desktop-video${loaded ? " loaded" : ""}`}
            src={VIDEO.landscape}
            autoPlay muted loop playsInline
            onCanPlay={() => setLoaded(true)}
            aria-label="MISSO Robotic Knee Replacement procedure video"
          />

          {/* Gradient overlay */}
          <div className="hv-desktop-overlay" aria-hidden="true" />

          {/* Text block */}
          {/* <div className="hv-desktop-text">
            <div className="hv-kicker">
              <span className="hv-kicker-dot" aria-hidden="true" />
              MISSO Robotic System
            </div>
            <h1 className="hv-title">
              Where Expertise<br />Meets <em>Robotic Precision</em>
            </h1>
            <p className="hv-sub">
              Advanced robotic-guided knee replacement — personalised to your anatomy,
              performed by a specialist you can trust.
            </p>
            <div className="hv-cta-row">
              <button className="hv-cta-primary">
                Book a Consultation <ArrowIcon />
              </button>
              <button className="hv-cta-ghost">
                Explore Technology
              </button>
            </div>
          </div> */}

          {/* Video controls */}
          <div className="hv-controls" aria-label="Video controls">
            <button className="hv-ctrl-btn" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button className="hv-ctrl-btn" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}>
              {muted ? <MuteIcon /> : <UnmuteIcon />}
            </button>
          </div>

          {/* Stat bar */}
          {/* <div className="hv-stat-bar" aria-label="Key statistics">
            {STATS.map((s, i) => (
              <div className="hv-stat-item" key={i}>
                <p className="hv-stat-val">{s.val}</p>
                <p className="hv-stat-lbl">{s.lbl}</p>
              </div>
            ))}
          </div> */}
        </div>

        {/* ══ MOBILE ════════════════════════════════════════ */}
        <div className="hv-mobile">

          {/* Portrait video */}
          <div className="hv-mobile-video-wrap">
            <video
              className={`hv-mobile-video${loaded ? " loaded" : ""}`}
              src={VIDEO.portrait}
              autoPlay muted loop playsInline
              onCanPlay={() => setLoaded(true)}
              aria-label="MISSO Robotic Knee Replacement procedure video"
            />
            <div className="hv-mobile-fade" aria-hidden="true" />
            <div className="hv-mobile-controls" aria-label="Video controls">
              <button className="hv-ctrl-btn-sm" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
                {playing ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button className="hv-ctrl-btn-sm" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}>
                {muted ? <MuteIcon /> : <UnmuteIcon />}
              </button>
            </div>
          </div>

          {/* Text panel */}
          {/* <div className="hv-mobile-text">
            <div className="hv-mobile-kicker">
              <span className="hv-mobile-kicker-dot" aria-hidden="true" />
              MISSO Robotic System
            </div>
            <h1 className="hv-mobile-title">
              Where Expertise Meets<br /><em>Robotic Precision</em>
            </h1>
            <p className="hv-mobile-sub">
              Advanced robotic-guided knee replacement — personalised to your anatomy,
              performed by a specialist you can trust.
            </p>
            <div className="hv-mobile-cta-row">
              <button className="hv-mobile-cta-primary">
                Book a Consultation <ArrowIcon />
              </button>
              <button className="hv-mobile-cta-ghost">
                Explore Technology
              </button>
            </div>
            <div className="hv-mobile-stats">
              {STATS.map((s, i) => (
                <div className="hv-mobile-stat" key={i}>
                  <p className="hv-mobile-stat-val">{s.val}</p>
                  <p className="hv-mobile-stat-lbl">{s.lbl}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>

      </div>
    </>
  );
}