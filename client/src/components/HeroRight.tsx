/**
 * HeroRight.tsx — Premium Animated Hero Right Panel
 * Dr. Nishant Verma — Next-Level Animation & Design
 *
 * ⚡ Add to index.html <head>:
 *   <link rel="preload" as="image" href="/hero_img.jpeg" fetchpriority="high" />
 */
import { useEffect, useState } from "react";

interface Props {
  visible?: boolean;
}

export default function HeroRight({ visible: visibleProp }: Props) {
  const [vis, setVis] = useState(false);
  const visible = visibleProp ?? vis;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (visibleProp !== undefined) return;
    const t = setTimeout(() => setVis(true), 120);
    return () => clearTimeout(t);
  }, [visibleProp]);

  // Subtle mouse tracking for depth effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.02;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.02;
    setMousePos({ x, y });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        :root {
          --primary: #2D8C7F;
          --primary-light: #3aa899;
          --primary-dark: #1f6860;
          --ink: #0f1e1c;
          --cream: #f7f9f8;
          --white: #ffffff;
        }

        /* ─── PREMIUM PANEL ─── */
        .hr-panel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a1c1a 0%, #081210 50%, #0a1814 100%);
          overflow: hidden;
          padding: 4rem 3.5rem 5rem;
          min-height: 100%;
          perspective: 1200px;
        }

        /* ── premium gradient overlay ── */
        .hr-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at top right, rgba(45,140,127,0.08) 0%, transparent 50%),
            radial-gradient(circle at bottom left, rgba(45,140,127,0.05) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        /* ── animated ambient glow ── */
        .hr-glow-base {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.3;
        }

        .hr-glow-1 {
          width: 450px;
          height: 450px;
          top: -150px;
          right: -120px;
          background: radial-gradient(circle, rgba(45, 140, 127, 0.4), transparent);
          animation: 
            hrGlowFloat 8s ease-in-out infinite,
            hrGlowPulse 6s ease-in-out infinite;
        }

        .hr-glow-2 {
          width: 320px;
          height: 320px;
          bottom: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(58, 180, 165, 0.25), transparent);
          animation: 
            hrGlowFloat 10s ease-in-out infinite reverse,
            hrGlowPulse 7s ease-in-out infinite reverse;
        }

        @keyframes hrGlowFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes hrGlowPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        /* ── particle field (pseudo) ── */
        .hr-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .hr-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(58, 180, 165, 0.4);
          opacity: 0;
          box-shadow: 0 0 4px rgba(58, 180, 165, 0.6);
          will-change: transform, opacity;
        }

        /* ─── MAIN SCENE ─── */
        .hr-scene {
          position: relative;
          width: clamp(200px, 22vw, 300px);
          z-index: 10;
          opacity: 0;
          transform: translateY(40px) scale(0.92) rotateX(15deg);
          transition: all 0.95s cubic-bezier(0.23, 1, 0.320, 1) 0.25s;
          transform-style: preserve-3d;
        }

        .hr-scene.in {
          opacity: 1;
          transform: translateY(0) scale(1) rotateX(0deg);
        }

        /* ── dynamic rings with dual animation ── */
        .hr-ring-container {
          position: absolute;
          inset: -50px;
          border-radius: 50%;
          will-change: transform;
        }

        /* outer dashed ring - slow rotation */
        .hr-ring-dash {
          position: absolute;
          inset: -45px;
          border-radius: 50%;
          border: 2px dashed rgba(45, 140, 127, 0.5);
          animation: hrRotate 24s linear infinite;
          box-shadow: 0 0 30px rgba(45, 140, 127, 0.1);
        }

        /* orbit markers - pulsing dots */
        .hr-ring-dash::before,
        .hr-ring-dash::after {
          content: '';
          position: absolute;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #3ab4a5;
          box-shadow: 
            0 0 12px rgba(58, 180, 165, 0.9),
            0 0 24px rgba(58, 180, 165, 0.4);
          animation: hrPulseGlow 2.5s ease-in-out infinite;
        }

        .hr-ring-dash::before {
          top: -5.5px;
          left: 50%;
          transform: translateX(-50%);
        }

        .hr-ring-dash::after {
          bottom: -5.5px;
          left: 50%;
          transform: translateX(-50%);
        }

        /* middle solid ring - faster counter-rotation */
        .hr-ring-solid {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          border: 1.5px solid rgba(45, 140, 127, 0.35);
          animation: hrRotate 16s linear infinite reverse;
        }

        /* inner subtle ring */
        .hr-ring-glow {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(45, 140, 127, 0.2);
          box-shadow: 0 0 25px rgba(45, 140, 127, 0.12) inset;
          animation: hrRotate 32s linear infinite;
          opacity: 0;
          transition: opacity 0.6s ease 0.5s;
        }

        .hr-scene.in .hr-ring-glow { opacity: 1; }

        @keyframes hrRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes hrPulseGlow {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
            box-shadow: 
              0 0 12px rgba(58, 180, 165, 0.9),
              0 0 24px rgba(58, 180, 165, 0.4);
          }
          50% { 
            opacity: 0.5;
            transform: scale(0.7);
            box-shadow: 
              0 0 6px rgba(58, 180, 165, 0.5),
              0 0 12px rgba(58, 180, 165, 0.2);
          }
        }

        /* ─── PORTRAIT SECTION ─── */
        .hr-portrait {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 120px 120px 80px 80px;
          overflow: hidden;
          background: linear-gradient(135deg, #0f2420 0%, #122420 100%);
          box-shadow:
            0 0 0 3px #fff,
            0 0 0 5px #2D8C7F,
            0 0 0 7px rgba(45, 140, 127, 0.3),
            0 40px 120px rgba(0, 0, 0, 0.6),
            0 0 80px rgba(45, 140, 127, 0.2),
            inset 0 -40px 80px rgba(0, 0, 0, 0.3);
          will-change: transform;
        }

        .hr-portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 10s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .hr-scene.in:hover .hr-portrait img {
          transform: scale(1.08) translateY(-8px);
        }

        /* premium gradient overlay */
        .hr-portrait::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            175deg,
            rgba(45, 140, 127, 0.08) 0%,
            transparent 35%,
            rgba(0, 0, 0, 0.25) 100%
          );
          pointer-events: none;
          transition: opacity 0.6s ease;
        }

        .hr-scene.in:hover .hr-portrait::after {
          opacity: 0.8;
        }

        /* ─── FLOATING STAT CARDS ─── */
        .hr-card {
          position: absolute;
          background: rgba(10, 28, 24, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(45, 140, 127, 0.35);
          border-radius: 12px;
          padding: 1rem 1.1rem;
          z-index: 20;
          opacity: 0;
          will-change: transform, opacity;
          box-shadow: 
            0 12px 48px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(45, 140, 127, 0.1),
            inset 0 0 20px rgba(45, 140, 127, 0.05);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .hr-card:hover {
          border-color: rgba(45, 140, 127, 0.6);
          box-shadow: 
            0 16px 64px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(45, 140, 127, 0.15),
            inset 0 0 20px rgba(45, 140, 127, 0.08);
          transform: translateY(-8px) !important;
        }

        /* experience card - top left */
        .hr-card-exp {
          top: 6%;
          left: -72px;
          min-width: 118px;
          transform: translateX(-20px);
          transition-delay: 0.7s;
        }

        .hr-card-exp.in {
          opacity: 1;
          transform: translateX(0);
        }

        /* specialties card - mid right */
        .hr-card-spec {
          top: 38%;
          right: -72px;
          min-width: 118px;
          transform: translateX(20px);
          transition-delay: 0.85s;
        }

        .hr-card-spec.in {
          opacity: 1;
          transform: translateX(0);
        }

        /* hospital card - bottom centre */
        .hr-card-hosp {
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          min-width: 210px;
          transition-delay: 1s;
        }

        .hr-card-hosp.in {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* ── card icon ── */
        .hr-card-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(45, 140, 127, 0.15);
          border: 1px solid rgba(45, 140, 127, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          transition: all 0.4s ease;
          will-change: transform, background;
        }

        .hr-card:hover .hr-card-icon {
          background: rgba(45, 140, 127, 0.25);
          border-color: rgba(45, 140, 127, 0.6);
          transform: scale(1.1) rotate(8deg);
        }

        .hr-card-icon svg {
          width: 12px;
          height: 12px;
          stroke: #3ab4a5;
          transition: all 0.4s ease;
        }

        .hr-card:hover .hr-card-icon svg {
          stroke: #52d4c6;
          filter: drop-shadow(0 0 4px rgba(58, 180, 165, 0.5));
        }

        /* ── card number ── */
        .hr-card-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #3ab4a5;
          line-height: 1;
          transition: all 0.4s ease;
          will-change: transform, color;
        }

        .hr-card:hover .hr-card-num {
          color: #52d4c6;
          transform: scale(1.12);
        }

        /* ── card label ── */
        .hr-card-lbl {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
          margin-top: 6px;
          transition: color 0.4s ease;
        }

        .hr-card:hover .hr-card-lbl {
          color: rgba(255, 255, 255, 0.7);
        }

        /* ── hospital row ── */
        .hr-hosp-row {
          display: flex;
          align-items: center;
          gap: 11px;
          transition: all 0.4s ease;
        }

        .hr-hosp-dot {
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #3ab4a5;
          box-shadow: 0 0 10px rgba(58, 180, 165, 0.9);
          animation: hrDotPulse 2s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes hrDotPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.8) translateX(-1px);
          }
        }

        .hr-hosp-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.76rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.95);
          transition: all 0.4s ease;
        }

        .hr-card-hosp:hover .hr-hosp-name {
          color: #52d4c6;
        }

        .hr-hosp-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 3px;
          transition: color 0.4s ease;
          line-height: 1.3;
        }

        .hr-card-hosp:hover .hr-hosp-sub {
          color: rgba(255, 255, 255, 0.6);
        }

        /* ──────────────────────────────
           RESPONSIVE DESIGN
        ────────────────────────────── */

        @media (max-width: 1024px) {
          .hr-scene {
            width: clamp(190px, 20vw, 270px);
          }
          .hr-card-exp { left: -62px; }
          .hr-card-spec { right: -62px; }
        }

        @media (max-width: 768px) {
          .hr-panel {
            padding: 3.5rem 2rem 4rem;
          }

          .hr-scene {
            width: min(220px, 54vw);
          }

          .hr-glow-1 { width: 380px; height: 380px; }
          .hr-glow-2 { width: 280px; height: 280px; }

          .hr-card-exp { left: -54px; }
          .hr-card-spec { right: -54px; }

          .hr-card {
            padding: 0.9rem 1rem;
            border-radius: 10px;
          }

          .hr-card-num { font-size: 1.8rem; }
          .hr-card-lbl { font-size: 0.6rem; }
        }

        @media (max-width: 480px) {
          .hr-panel {
            padding: 3rem 1.25rem 3.5rem;
          }

          .hr-scene {
            width: min(165px, 48vw);
            transform: translateY(40px) scale(0.88) rotateX(15deg);
          }

          .hr-ring-dash { inset: -32px; }
          .hr-ring-solid { inset: -14px; }

          .hr-glow-1 {
            width: 280px;
            height: 280px;
            top: -100px;
            right: -80px;
          }

          .hr-glow-2 {
            width: 200px;
            height: 200px;
            bottom: -80px;
            left: -80px;
          }

          .hr-card {
            padding: 0.75rem 0.9rem;
            border-radius: 8px;
            border: 1px solid rgba(45, 140, 127, 0.28);
          }

          .hr-card-exp {
            top: 3%;
            left: -42px;
            min-width: 100px;
          }

          .hr-card-spec {
            top: 40%;
            right: -42px;
            min-width: 100px;
          }

          .hr-card-hosp {
            bottom: -22px;
            min-width: 180px;
          }

          .hr-card-num { font-size: 1.5rem; }
          .hr-card-lbl { font-size: 0.56rem; }
          .hr-hosp-name { font-size: 0.7rem; }
          .hr-hosp-sub { font-size: 0.58rem; }
          .hr-card-icon { width: 24px; height: 24px; }
          .hr-portrait { border-radius: 100px 100px 70px 70px; }
        }

        @media (max-width: 360px) {
          .hr-scene {
            width: min(145px, 46vw);
          }

          .hr-card-exp { left: -32px; }
          .hr-card-spec { right: -32px; }

          .hr-card {
            padding: 0.65rem 0.8rem;
          }

          .hr-card-num { font-size: 1.35rem; }
        }

        /* ── smooth hardware acceleration ── */
        .hr-scene,
        .hr-card,
        .hr-ring-dash,
        .hr-ring-solid,
        .hr-portrait img {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>

      <div 
        className="hr-panel" 
        onMouseMove={handleMouseMove}
        style={{
          transform: `perspective(1200px) rotateY(${mousePos.x * 0.5}deg) rotateX(${mousePos.y * -0.5}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Ambient glow effects */}
        <div className="hr-glow-base hr-glow-1" />
        <div className="hr-glow-base hr-glow-2" />

        {/* Particle field container */}
        <div className="hr-particles" />

        {/* Main scene with rotating portrait */}
        <div className={`hr-scene${visible ? " in" : ""}`}>

          {/* Animated concentric rings */}
          <div className="hr-ring-container">
            <div className="hr-ring-dash" />
            <div className="hr-ring-solid" />
            <div className="hr-ring-glow" />
          </div>

          {/* Premium portrait with gloss effect */}
          <div className="hr-portrait">
            <img
              src="/hero_img.jpeg"
              alt="Dr. Nishant Verma – Consultant Orthopaedic Surgeon"
              fetchPriority="high"
              decoding="async"
              loading="eager"
            />
          </div>

          {/* ── Stat Card 1: Experience ── */}
          <div className={`hr-card hr-card-exp${visible ? " in" : ""}`}>
            <div className="hr-card-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="hr-card-num">10+</div>
            <div className="hr-card-lbl">Years</div>
          </div>

          {/* ── Stat Card 2: Specialties ── */}
          <div className={`hr-card hr-card-spec${visible ? " in" : ""}`}>
            <div className="hr-card-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M12 2L15 10H23L17 15L19 23L12 18L5 23L7 15L1 10H9L12 2Z" />
              </svg>
            </div>
            <div className="hr-card-num">6</div>
            <div className="hr-card-lbl">Specialities</div>
          </div>

          {/* ── Stat Card 3: Hospital ── */}
          <div className={`hr-card hr-card-hosp${visible ? " in" : ""}`}>
            <div className="hr-hosp-row">
              <span className="hr-hosp-dot" />
              <div>
                <div className="hr-hosp-name">Sarvodaya Hospital</div>
                <div className="hr-hosp-sub">Hisar, Haryana</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}