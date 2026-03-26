import { useEffect, useRef, useState } from "react";
import HeroRight from "./HeroRight";

const expertise = [
  "Hip & Knee Replacement",
  "Arthroscopy – Knee/Shoulder",
  "Complex Trauma Reconstruction",
  "Ilizarov & Limb Salvage",
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Best Orthopedic Doctor in Hisar";
  // <h1>Best Orthopedic Doctor in Hisar</h1>
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --primary: #2D8C7F;
          --primary-light: #3aa899;
          --primary-dark: #1f6860;
          --primary-border: rgba(45, 140, 127, 0.2);
          --ink: #0f1e1c;
          --ink-soft: #4a5e5b;
          --cream: #f7f9f8;
          --white: #ffffff;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          color: var(--ink);
          overflow-x: hidden;
        }

        .hero {
          min-height: 100svh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          overflow: hidden;
        }

        .hero-left {
          background: var(--white);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(2rem, 5vw, 6rem);
          z-index: 2;
        }

        .hero-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--primary-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary-border) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.4;
          pointer-events: none;
        }

        /* ─── CONTENT ANIMATIONS ─── */
        .tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--primary);
          padding: 6px 14px;
          border: 1px solid var(--primary-border);
          border-radius: 2px;
          width: fit-content;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .tag.in { opacity: 1; transform: none; }

        .tag-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--primary);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 0.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }
        .hero-name.in { opacity: 1; transform: none; }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 1.8vw, 1.5rem);
          font-weight: 300;
          color: var(--primary);
          letter-spacing: 0.02em;
          min-height: 2rem;
          margin-bottom: 1.75rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;
        }
        .hero-title.in { opacity: 1; transform: none; }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: var(--primary);
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 0.9s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .divider {
          width: 60px;
          height: 2px;
          background: var(--primary);
          margin-bottom: 1.75rem;
          opacity: 0;
          transition: opacity 0.6s ease 0.35s, width 0.8s ease 0.35s;
        }
        .divider.in { opacity: 1; }

        .hero-bio {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--ink-soft);
          max-width: 440px;
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s;
        }
          @media (max-width: 768px) {
  .hero-bio {
    display:none;
  }
}
        .hero-bio.in { opacity: 1; transform: none; }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-bottom: 2.75rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;
        }
        .expertise-grid.in { opacity: 1; transform: none; }

        .expertise-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--ink-soft);
          text-align: left;
        }

        .expertise-item::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
        }

        .cta-row {
          display: flex;
          gap: 1rem;
          align-items: center;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s;
        }
        .cta-row.in { opacity: 1; transform: none; }

        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .btn-primary { background: var(--primary); color: #fff; border: none; }
        .btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); }
        .btn-secondary { background: transparent; color: var(--ink); border: 1px solid rgba(15,30,28,0.15); }
        .btn-secondary:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-2px); }

        /* ─── RESPONSIVE LOGIC ─── */
        @media (max-width: 1024px) {
          .hero { grid-template-columns: 1fr; }
          .hero-left {
            align-items: center;
            text-align: center;
            padding: 6rem 2rem 4rem;
          }
          .hero-bio { margin-left: auto; margin-right: auto; }
          .expertise-grid { 
            justify-content: center;
            max-width: 500px;
            margin-left: auto; 
            margin-right: auto;
          }
          .divider { margin-left: auto; margin-right: auto; }
          .cta-row { justify-content: center; width: 100%; }
        }

        @media (max-width: 640px) {
          .expertise-grid { grid-template-columns: 1fr; text-align: left; }
          .expertise-item { justify-content: flex-start; }
          .cta-row { flex-direction: column; width: 100%; }
          .btn-primary, .btn-secondary { width: 100%; max-width: 320px; }
          .hero-name { font-size: 3.2rem; }
        }
      `}</style>

      <div className="hero" id="hero" ref={heroRef}>
        <div className="hero-left">
          <div className={`tag${visible ? " in" : ""}`}>
            <span className="tag-dot" />
            MS Orthopaedics · 10+ Years Experience
          </div>

          <h1 className={`hero-name${visible ? " in" : ""}`}>
            Dr. Nishant Verma
          </h1>

          <p className={`hero-title${visible ? " in" : ""}`}>
            {typedText}
            <span className="cursor" />
          </p>

          <div className={`divider${visible ? " in" : ""}`} />

          <p className={`hero-bio${visible ? " in" : ""}`}>
            Specialising in Joint Replacement &amp; Arthroscopy with advanced care
            for bone, joint, and trauma disorders. Practising at Sarovdya Hospital, Hisar — 
            with prior experience at Sant Parmanand Hospital, Delhi &amp; MAMC, Agroha.
          </p>

          <div className={`expertise-grid${visible ? " in" : ""}`}>
            {expertise.map((item) => (
              <div key={item} className="expertise-item">{item}</div>
            ))}
          </div>

          <div className={`cta-row${visible ? " in" : ""}`}>
            <a href="tel:9416091718" className="btn-primary">
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="tel:9416091718" className="btn-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Now
            </a>
          </div>
        </div>

        <HeroRight visible={visible} />
      </div>
    </>
  );
}