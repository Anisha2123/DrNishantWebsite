/**
 * DoctorProfile.tsx
 * Full doctor profile section — expertise, experience, education
 * Minimalist editorial design | scroll-triggered animations | brand teal only
 */
import { useEffect, useRef, useState } from "react";
// import "../App.css"; // Commented out for standalone stability

/* ─── data ─── */
const expertise = [
  { n: "01", label: "Hip & Knee Replacement" },
  { n: "02", label: "Arthroscopy – Knee/Shoulder" },
  { n: "03", label: "Pelvis & Acetabulum Trauma" },
  { n: "04", label: "Foot & Ankle Surgery" },
  { n: "05", label: "Ilizarov & Limb Salvage" },
  { n: "06", label: "Complex Trauma Reconstruction" },
];

const hospitals = [
  { name: "Sarovdya Hospital", place: "Hisar, Haryana", current: true },
  { name: "Sant Parmanand Hospital", place: "Delhi", current: false },
  { name: "Geetanjali Hospital", place: "Hisar, Haryana", current: false },
  { name: "MAMC", place: "Agroha", current: false },
];

const education = [
  { degree: "MBBS", detail: "Bachelor of Medicine & Bachelor of Surgery", icon: "🎓" },
  { degree: "MS Orthopaedics", detail: "Master of Surgery — Bone, Joint & Trauma", icon: "🦴" },
];

const focusPoints = [
  "Accurate Diagnosis",
  "Evidence-Based Surgical Planning",
  "Structured Post-Operative Rehabilitation",
];

/* ─── hook ─── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── animated counter ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = Math.ceil(target / 40);
      const iv = setInterval(() => {
        start += step;
        if (start >= target) { setVal(target); clearInterval(iv); }
        else setVal(start);
      }, 35);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function DoctorProfile() {
  const hero   = useInView(0.08);
  const expSec = useInView(0.08);
  const hospSec= useInView(0.08);
  const eduSec = useInView(0.08);
  const philSec= useInView(0.08);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --primary:         #2D8C7F;
          --primary-light:   #3aa899;
          --primary-dark:    #1f6860;
          --primary-muted:   rgba(45,140,127,0.07);
          --primary-border: rgba(45,140,127,0.2);
          --ink:             #0f1e1c;
          --ink-soft:        #4a5e5b;
          --cream:           #f7f9f8;
          --white:           #ffffff;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .dp-wrap {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          color: var(--ink);
          overflow-x: hidden;
        }

        /* ════════════════════════════════
           SHARED UTILITIES
        ════════════════════════════════ */
        .dp-fade {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .dp-fade.in { opacity: 1; transform: none; }

        .dp-section {
          padding: clamp(4.5rem,9vw,8rem) clamp(1.5rem,7vw,7rem);
          position: relative;
        }

        .dp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.67rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 1.2rem;
        }
        .dp-eyebrow-dash {
          width: 28px; height: 1px;
          background: var(--primary);
        }

        .dp-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          font-weight: 700;
          line-height: 1.02;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin-bottom: 0.4rem;
        }
        .dp-h2 em { font-style: italic; font-weight: 300; color: var(--primary); }

        /* ════════════════════════════════
           ① INTRO HERO BAND
        ════════════════════════════════ */
        .dp-intro {
          background: var(--white);
          border-bottom: 1px solid var(--primary-border);
          position: relative;
          overflow: hidden;
        }

        .dp-intro::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, var(--primary-border) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.4;
          pointer-events: none;
        }

        .dp-intro::after {
          content: '';
          position: absolute;
          left: 0; top: 15%; bottom: 15%;
          width: 3px;
          background: linear-gradient(to bottom, transparent, var(--primary), transparent);
          border-radius: 2px;
        }

        .dp-intro-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem 7rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .dp-intro-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border: 1px solid var(--primary-border);
          background: var(--primary-muted);
          width: fit-content;
          margin-bottom: 1.5rem;
          font-size: 0.67rem;
          font-weight: 500;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          color: var(--primary);
        }
        .dp-intro-dot {
          width: 6px; height: 6px;
          border-radius: 50%; background: var(--primary);
          animation: dpPulse 2.2s ease-in-out infinite;
        }
        @keyframes dpPulse { 0%,100%{opacity:1} 50%{opacity:0.2} }

        .dp-intro-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 4.5vw, 4.6rem);
          font-weight: 700;
          line-height: 0.94;
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 0.6rem;
        }
        .dp-intro-name span { color: var(--primary); }

        .dp-intro-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 1.6vw, 1.3rem);
          font-weight: 300;
          font-style: italic;
          color: var(--ink-soft);
          margin-bottom: 1.8rem;
        }

        .dp-intro-rule {
          width: 40px; height: 2px;
          background: linear-gradient(to right, var(--primary), var(--primary-light));
          margin-bottom: 1.8rem;
          opacity: 0;
          transition: opacity 0.5s ease 0.3s, width 0.9s ease 0.3s;
        }
        .dp-intro-rule.in { opacity: 1; width: 40px; }

        .dp-intro-bio {
          font-size: 0.93rem;
          line-height: 1.82;
          color: var(--ink-soft);
          margin-bottom: 2.25rem;
          max-width: 420px;
        }

        .dp-contact-row {
          display: flex; flex-wrap: wrap; gap: 0.75rem;
        }
        .dp-contact-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 7px 14px;
          border: 1px solid var(--primary-border);
          background: var(--primary-muted);
          font-size: 0.75rem; color: var(--ink-soft);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .dp-contact-pill:hover {
          background: var(--primary); color: #fff;
          border-color: var(--primary);
        }

        .dp-stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--primary-border);
          border: 1px solid var(--primary-border);
        }
        .dp-stat-cell {
          background: var(--white);
          padding: 1.75rem 1.5rem;
          transition: background 0.25s;
        }
        .dp-stat-cell:hover { background: rgba(45,140,127,0.04); }
        .dp-stat-n {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem; font-weight: 700;
          color: var(--primary); line-height: 1;
          margin-bottom: 4px;
        }
        .dp-stat-l {
          font-size: 0.62rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--ink-soft);
        }
        .dp-stat-cell-wide {
          grid-column: 1/-1;
          background: var(--primary);
          padding: 1.2rem 1.5rem;
          display: flex; align-items: center; gap: 10px;
        }
        .dp-stat-cell-wide-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(255,255,255,0.6);
          animation: dpPulse 2s infinite;
          flex-shrink: 0;
        }
        .dp-stat-cell-wide-text {
          font-size: 0.77rem; font-weight: 500;
          color: rgba(255,255,255,0.9);
        }
        .dp-stat-cell-wide-sub {
          font-size: 0.63rem;
          color: rgba(255,255,255,0.55);
          margin-top: 2px;
        }

        /* ════════════════════════════════
           ② EXPERTISE
        ════════════════════════════════ */
        .dp-exp-bg { background: var(--cream); }

        .dp-exp-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem 6rem;
          align-items: end;
          margin-bottom: 3.5rem;
        }

        .dp-exp-sub {
          font-size: 0.9rem;
          line-height: 1.75;
          color: var(--ink-soft);
          max-width: 400px;
          align-self: end;
        }

        .dp-exp-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid var(--primary-border);
        }

        .dp-exp-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem 1.75rem;
          border-right: 1px solid var(--primary-border);
          border-bottom: 1px solid var(--primary-border);
          background: var(--white);
          position: relative;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity 0.55s ease, transform 0.55s ease, background 0.25s;
        }
        .dp-exp-item.in { opacity: 1; transform: none; }
        .dp-exp-item:nth-child(2n)   { border-right: none; }
        .dp-exp-item:nth-child(5),
        .dp-exp-item:nth-child(6)    { border-bottom: none; }
        .dp-exp-item:hover { background: rgba(45,140,127,0.035); }

        .dp-exp-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--primary);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.35s ease;
        }
        .dp-exp-item:hover::before { transform: scaleY(1); }

        .dp-exp-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem; font-weight: 700;
          color: rgba(45,140,127,0.18);
          flex-shrink: 0; line-height: 1;
          transition: color 0.25s;
          user-select: none;
        }
        .dp-exp-item:hover .dp-exp-num { color: rgba(45,140,127,0.35); }

        .dp-exp-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; font-weight: 500;
          color: var(--ink); line-height: 1.3;
        }

        .dp-exp-icon {
          margin-left: auto; flex-shrink: 0;
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1px solid var(--primary-border);
          background: var(--primary-muted);
          display: flex; align-items: center; justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .dp-exp-item:hover .dp-exp-icon { opacity: 1; }
        .dp-exp-icon svg { width: 13px; height: 13px; }

        /* ════════════════════════════════
           ③ EXPERIENCE / HOSPITALS
        ════════════════════════════════ */
        .dp-hosp-bg { background: var(--white); }

        .dp-hosp-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem 7rem;
          align-items: start;
        }

        .dp-timeline {
          position: relative;
          padding-left: 1.75rem;
        }
        .dp-timeline::before {
          content: '';
          position: absolute;
          left: 0; top: 6px;
          width: 1px;
          background: var(--primary-border);
          opacity: 0;
          transition: height 0.8s ease 0.2s, opacity 0.4s ease 0.2s;
          height: 0;
        }
        .dp-timeline.in::before { opacity: 1; height: calc(100% - 12px); }

        .dp-tl-item {
          position: relative;
          padding-bottom: 2.25rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .dp-tl-item.in { opacity: 1; transform: none; }
        .dp-tl-item:last-child { padding-bottom: 0; }
        .dp-tl-item::before {
          content: '';
          position: absolute;
          left: -1.75rem;
          top: 5px;
          width: 9px; height: 9px;
          border-radius: 50%;
          border: 2px solid var(--primary);
          background: var(--white);
          transform: translateX(-4px);
        }
        .dp-tl-item.current::before { background: var(--primary); }

        .dp-tl-badge {
          display: inline-block;
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--primary);
          background: var(--primary-muted);
          border: 1px solid var(--primary-border);
          padding: 2px 8px;
          margin-bottom: 0.4rem;
        }

        .dp-tl-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 600;
          color: var(--ink); margin-bottom: 2px;
        }
        .dp-tl-place {
          font-size: 0.8rem; color: var(--ink-soft);
          display: flex; align-items: center; gap: 5px;
        }
        .dp-tl-place::before {
          content: '';
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--primary-light); flex-shrink: 0;
        }

        .dp-phil-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 600; line-height: 1.2;
          color: var(--ink); margin-bottom: 1rem;
        }
        .dp-phil-body {
          font-size: 0.9rem; line-height: 1.8;
          color: var(--ink-soft); margin-bottom: 2rem;
        }
        .dp-focus-list {
          display: flex; flex-direction: column; gap: 0.85rem;
        }
        .dp-focus-item {
          display: flex; align-items: center; gap: 1rem;
          padding: 1rem 1.25rem;
          border: 1px solid var(--primary-border);
          background: var(--cream);
          position: relative; overflow: hidden;
          opacity: 0; transform: translateX(14px);
          transition: opacity 0.55s ease, transform 0.55s ease, background 0.25s;
        }
        .dp-focus-item.in { opacity: 1; transform: none; }
        .dp-focus-item:hover { background: var(--primary-muted); }
        .dp-focus-item::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 2px; background: var(--primary);
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.3s ease;
        }
        .dp-focus-item:hover::before { transform: scaleY(1); }
        .dp-focus-n {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 700;
          color: rgba(45,140,127,0.25); flex-shrink: 0;
        }
        .dp-focus-text {
          font-size: 0.85rem; font-weight: 500; color: var(--ink);
        }
        .dp-focus-arrow {
          margin-left: auto; opacity: 0;
          transition: opacity 0.25s; flex-shrink: 0;
        }
        .dp-focus-item:hover .dp-focus-arrow { opacity: 1; }

        /* ════════════════════════════════
           ④ EDUCATION
        ════════════════════════════════ */
        .dp-edu-bg { background: var(--cream); }

        .dp-edu-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem 7rem;
          align-items: center;
        }

        .dp-deg-stack {
          display: flex; flex-direction: column; gap: 1px;
          background: var(--primary-border);
          border: 1px solid var(--primary-border);
        }
        .dp-deg-card {
          background: var(--white);
          padding: 2rem 1.75rem;
          display: flex; align-items: flex-start; gap: 1.25rem;
          transition: background 0.25s;
          cursor: default;
          position: relative; overflow: hidden;
        }
        .dp-deg-card:hover { background: rgba(45,140,127,0.04); }
        .dp-deg-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, var(--primary), var(--primary-light));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.45s ease;
        }
        .dp-deg-card:hover::after { transform: scaleX(1); }

        .dp-deg-icon {
          width: 44px; height: 44px; flex-shrink: 0;
          border-radius: 50%;
          background: var(--primary-muted);
          border: 1px solid var(--primary-border);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
        }
        .dp-deg-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem; font-weight: 700;
          color: var(--primary); margin-bottom: 3px;
        }
        .dp-deg-detail {
          font-size: 0.8rem; color: var(--ink-soft); line-height: 1.5;
        }

        .dp-edu-about {
          font-size: 0.95rem;
          line-height: 1.85;
          color: var(--ink-soft);
        }
        .dp-edu-about p { margin-bottom: 1.25rem; }

        .dp-quote {
          border-left: 3px solid var(--primary);
          padding: 1.25rem 1.5rem;
          background: var(--white);
          margin-top: 2rem;
        }
        .dp-quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 400; font-style: italic;
          line-height: 1.5; color: var(--ink);
        }
        .dp-quote-attr {
          font-size: 0.7rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--primary);
          margin-top: 0.75rem; font-style: normal;
        }

        .dp-divider {
          height: 1px; background: var(--primary-border);
          margin: 0 clamp(1.5rem,7vw,7rem);
        }

        /* ════════════════════════════════
           ⑤ MOBILE OPTIMIZATION (≤768px)
        ════════════════════════════════ */
        @media (max-width: 768px) {
          .dp-section {
            padding: 3.5rem 1.25rem;
            text-align: center;
          }

          .dp-intro-inner,
          .dp-exp-header,
          .dp-hosp-layout,
          .dp-edu-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .dp-intro-badge,
          .dp-intro-rule,
          .dp-contact-row,
          .dp-eyebrow,
          .dp-intro-bio {
            margin-left: auto;
            margin-right: auto;
          }

          .dp-intro-name {
             font-size: 2.6rem;
          }

          .dp-intro-bio {
            max-width: 100%;
          }

          .dp-contact-row {
            justify-content: center;
          }

          .dp-stat-grid {
             margin-top: 1rem;
          }

          .dp-stat-cell {
            padding: 1.5rem 1rem;
          }

          .dp-stat-n {
            font-size: 2.4rem;
          }

          /* Keep 2 columns for Expertise for better visual balance */
          .dp-exp-list {
            grid-template-columns: 1fr 1fr;
          }

          .dp-exp-item {
            padding: 1.25rem 1rem;
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }

          .dp-exp-item:nth-child(2n) {
             border-right: none;
          }

          /* Reset specific borders for 2-column mobile flow */
          .dp-exp-item:nth-child(even) { border-right: none; }
          .dp-exp-item:nth-child(odd) { border-right: 1px solid var(--primary-border); }
          .dp-exp-item:nth-last-child(-n+2) { border-bottom: none; }

          .dp-exp-icon {
            display: none; /* Hide decorative icon on small mobile cells */
          }

          .dp-timeline {
            padding-left: 0;
            text-align: left;
            display: inline-block;
            margin: 0 auto;
          }
          
          .dp-tl-item {
             padding-left: 1.75rem;
          }

          .dp-focus-item {
            text-align: left;
          }

          .dp-deg-card {
            text-align: left;
            padding: 1.5rem;
          }

          .dp-quote {
            text-align: left;
          }

          .dp-divider {
            margin: 0 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .dp-exp-list {
            grid-template-columns: 1fr;
          }
          .dp-exp-item {
            border-right: none !important;
            border-bottom: 1px solid var(--primary-border) !important;
          }
          .dp-exp-item:last-child {
            border-bottom: none !important;
          }
          .dp-intro-name {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <div className="dp-wrap" id ="about">

        {/* ═══════════════════════════════
            ① INTRO BAND
        ═══════════════════════════════ */}
        <section className="dp-section dp-intro" ref={hero.ref}>
          <div className="dp-intro-inner">

            {/* left */}
            <div>
              <div className={`dp-intro-badge dp-fade${hero.inView ? " in" : ""}`}
                style={{ transitionDelay: "0s" }}>
                <span className="dp-intro-dot" />
                Consultant Orthopaedic Surgeon
              </div>

              <h1 className={`dp-intro-name dp-fade${hero.inView ? " in" : ""}`}
                style={{ transitionDelay: "0.1s" }}>
                Dr. Nishant<br /><span>Verma</span>
              </h1>

              <p className={`dp-intro-title dp-fade${hero.inView ? " in" : ""}`}
                style={{ transitionDelay: "0.18s" }}>
                Joint Replacement & Arthroscopy · Advanced Care for Bone, Joint & Trauma
              </p>

              <div className={`dp-intro-rule${hero.inView ? " in" : ""}`} />

              <p className={`dp-intro-bio dp-fade${hero.inView ? " in" : ""}`}
                style={{ transitionDelay: "0.32s" }}>
                With over 10 years of experience, Dr. Verma is a highly specialised Orthopaedic & Joint Replacement Surgeon at Sarovdya Hospital, Hisar. His clinical expertise spans trauma, arthroplasty, arthroscopy, and complex limb reconstruction.
              </p>

              <div className={`dp-contact-row dp-fade${hero.inView ? " in" : ""}`}
                style={{ transitionDelay: "0.42s" }}>
                <a href="mailto:drnishantverma422@gmail.com" className="dp-contact-pill">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                  drnishantverma422@gmail.com
                </a>
                <a href="tel:+918837667062" className="dp-contact-pill">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +91 8837667062
                </a>
                {/* Location */}
  <a
    href="https://maps.app.goo.gl/X3u7poRoyjuLQEzi8?g_st=aw"
    target="_blank"
    rel="noopener noreferrer"
    className="dp-contact-pill"
  >
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
    Sarvodaya Hospital, Hisar
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/orthodr.nishant/"
    target="_blank"
    rel="noopener noreferrer"
    className="dp-contact-pill"
  >
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="3"/>
      <circle cx="17.5" cy="6.5" r="1"/>
    </svg>
    Instagram
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61588053463769"
    target="_blank"
    rel="noopener noreferrer"
    className="dp-contact-pill"
  >
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
    Facebook
  </a>

  {/* YouTube */}
  <a
    href="https://youtube.com/@nishantverma36?si=YEkCbCO9WhQvDRDT"
    target="_blank"
    rel="noopener noreferrer"
    className="dp-contact-pill"
  >
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22.5 6.5a2.8 2.8 0 00-2-2c-1.8-.5-8.5-.5-8.5-.5s-6.7 0-8.5.5a2.8 2.8 0 00-2 2A29 29 0 001 12a29 29 0 00.5 5.5 2.8 2.8 0 002 2c1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5a2.8 2.8 0 002-2A29 29 0 0023 12a29 29 0 00-.5-5.5z"/>
      <polygon points="10 15 15 12 10 9 10 15"/>
    </svg>
    YouTube
  </a>

              </div>
            </div>

            {/* right — stat grid */}
            <div className={`dp-stat-grid dp-fade${hero.inView ? " in" : ""}`}
              style={{ transitionDelay: "0.2s" }}>
              <div className="dp-stat-cell">
                <div className="dp-stat-n"><Counter target={10} suffix="+" /></div>
                <div className="dp-stat-l">Years Experience</div>
              </div>
              <div className="dp-stat-cell">
                <div className="dp-stat-n"><Counter target={6} /></div>
                <div className="dp-stat-l">Speciality Areas</div>
              </div>
              <div className="dp-stat-cell">
                <div className="dp-stat-n"><Counter target={3} /></div>
                <div className="dp-stat-l">Premier Hospitals</div>
              </div>
              <div className="dp-stat-cell">
                <div className="dp-stat-n"><Counter target={2} /></div>
                <div className="dp-stat-l">Degrees Held</div>
              </div>
              <div className="dp-stat-cell-wide">
                <span className="dp-stat-cell-wide-dot" />
                <div style={{textAlign: 'left'}}>
                  <div className="dp-stat-cell-wide-text">Sarovdya Hospital, Hisar</div>
                  <div className="dp-stat-cell-wide-sub">Currently Practising · Haryana</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="dp-divider" /> */}

        {/* ═══════════════════════════════
            ② AREAS OF EXPERTISE
        ═══════════════════════════════ */}
        {/* <section className="dp-section dp-exp-bg" ref={expSec.ref}>
          <div className="dp-exp-header">
            <div>
              <div className={`dp-eyebrow dp-fade${expSec.inView ? " in" : ""}`}>
                <span className="dp-eyebrow-dash" />
                Clinical Expertise
              </div>
              <h2 className={`dp-h2 dp-fade${expSec.inView ? " in" : ""}`}
                style={{ transitionDelay: "0.1s" }}>
                Areas of <em>Specialisation</em>
              </h2>
            </div>
            <p className={`dp-exp-sub dp-fade${expSec.inView ? " in" : ""}`}
              style={{ transitionDelay: "0.18s" }}>
              Expert in primary and revision hip and knee replacement, sports injury management, and complex fracture reconstruction.
            </p>
          </div>

          <div className="dp-exp-list">
            {expertise.map((e, i) => (
              <div
                key={e.n}
                className={`dp-exp-item${expSec.inView ? " in" : ""}`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <span className="dp-exp-num">{e.n}</span>
                <span className="dp-exp-label">{e.label}</span>
                <div className="dp-exp-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2D8C7F" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <div className="dp-divider" />

        {/* ═══════════════════════════════
            ③ EXPERIENCE + PHILOSOPHY
        ═══════════════════════════════ */}
        <section className="dp-section dp-hosp-bg" ref={hospSec.ref}>
          <div className="dp-hosp-layout">
            <div>
              <div className={`dp-eyebrow dp-fade${hospSec.inView ? " in" : ""}`}>
                <span className="dp-eyebrow-dash" />
                Professional Experience
              </div>
              <h2 className={`dp-h2 dp-fade${hospSec.inView ? " in" : ""}`}
                style={{ transitionDelay: "0.1s", marginBottom: "2.5rem" }}>
                Where He's <em>Practiced</em>
              </h2>

              <div className={`dp-timeline${hospSec.inView ? " in" : ""}`}>
                {hospitals.map((h, i) => (
                  <div
                    key={h.name}
                    className={`dp-tl-item${h.current ? " current" : ""}${hospSec.inView ? " in" : ""}`}
                    style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                  >
                    {h.current && <span className="dp-tl-badge">Currently Practising</span>}
                    <div className="dp-tl-name">{h.name}</div>
                    <div className="dp-tl-place">{h.place}</div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={philSec.ref}>
              <div className={`dp-eyebrow dp-fade${philSec.inView ? " in" : ""}`}>
                <span className="dp-eyebrow-dash" />
                Treatment Philosophy
              </div>
              <h2 className={`dp-phil-title dp-fade${philSec.inView ? " in" : ""}`}
                style={{ transitionDelay: "0.1s" }}>
                Patient-Centred,<br />Evidence-Driven Care
              </h2>
              <p className={`dp-phil-body dp-fade${philSec.inView ? " in" : ""}`}
                style={{ transitionDelay: "0.18s" }}>
                Focusing on the complete patient, from precise diagnosis through surgical planning to structured recovery.
              </p>

              <div className="dp-focus-list">
                {focusPoints.map((f, i) => (
                  <div
                    key={f}
                    className={`dp-focus-item${philSec.inView ? " in" : ""}`}
                    style={{ transitionDelay: `${0.26 + i * 0.1}s` }}
                  >
                    <span className="dp-focus-n">0{i + 1}</span>
                    <span className="dp-focus-text">{f}</span>
                    <div className="dp-focus-arrow">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D8C7F" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="dp-divider" />

        {/* ═══════════════════════════════
            ④ EDUCATION
        ═══════════════════════════════ */}
        <section className="dp-section dp-edu-bg" ref={eduSec.ref}>
          <div className="dp-edu-layout">
            <div>
              <div className={`dp-eyebrow dp-fade${eduSec.inView ? " in" : ""}`}>
                <span className="dp-eyebrow-dash" />
                Educational Background
              </div>
              <h2 className={`dp-h2 dp-fade${eduSec.inView ? " in" : ""}`}
                style={{ transitionDelay: "0.1s", marginBottom: "2rem" }}>
                Academic <em>Foundation</em>
              </h2>

              <div className="dp-deg-stack">
                {education.map((ed, i) => (
                  <div
                    key={ed.degree}
                    className={`dp-deg-card dp-fade${eduSec.inView ? " in" : ""}`}
                    style={{ transitionDelay: `${0.18 + i * 0.12}s` }}
                  >
                    <div className="dp-deg-icon">{ed.icon}</div>
                    <div>
                      <div className="dp-deg-name">{ed.degree}</div>
                      <div className="dp-deg-detail">{ed.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`dp-fade${eduSec.inView ? " in" : ""}`}
              style={{ transitionDelay: "0.22s" }}>
              <div className="dp-edu-about">
                <p>
                  Technical precision combined with a patient-first perspective developed at institutions including MAMC, Agroha and Sant Parmanand Hospital, Delhi.
                </p>
              </div>

              <div className="dp-quote">
                <p className="dp-quote-text">
                  "Treating the whole patient — not just their bone problem."
                </p>
                <div className="dp-quote-attr">— Dr. Nishant Verma</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}