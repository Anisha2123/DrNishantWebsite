/**
 * WhyChoose.tsx
 * "Why Dr. Nishant Verma?" section
 * Editorial minimalist — Cormorant + DM Sans, brand teal only, scroll-triggered animations
 */
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    n: "01",
    title: "Focused Expertise in Joint Replacement",
    body: "Dedicated specialisation in primary and revision hip and knee arthroplasty ensures patients receive care from a surgeon whose skills are sharpened through consistent, high-volume practice in this discipline.",
  },
  {
    n: "02",
    title: "Experience in Both Arthroplasty and Trauma",
    body: "A dual background in elective joint surgery and complex trauma reconstruction means Dr. Verma brings a broader clinical lens — critical when managing patients with prior injuries or multi-system presentations.",
  },
  {
    n: "03",
    title: "Academic Background Strengthens Clinical Judgment",
    body: "Training at MAMC, Agroha and Sant Parmanand Hospital, Delhi builds a foundation of evidence-based decision-making that directly benefits the quality and safety of surgical outcomes.",
  },
  {
    n: "04",
    title: "Capability in Revision & Complex Cases",
    body: "Revision arthroplasty and Ilizarov-based limb reconstruction demand precision and experience that only a specialist-level orthopaedic surgeon can provide — an area where Dr. Verma has demonstrated consistent capability.",
  },
  {
    n: "05",
    title: "Structured Treatment Philosophy",
    body: "From accurate diagnosis through evidence-based surgical planning to structured post-operative rehabilitation, every stage of care is deliberate — reducing variability and improving patient recovery outcomes.",
  },
];

function useInView(threshold = 0.15) {
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

export default function WhyChoose() {
  const header = useInView(0.1);
  const grid   = useInView(0.08);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --primary:         #2D8C7F;
          --primary-light:   #3aa899;
          --primary-dark:    #1f6860;
          --primary-muted:   rgba(45,140,127,0.07);
          --primary-border:  rgba(45,140,127,0.2);
          --ink:             #0f1e1c;
          --ink-soft:        #4a5e5b;
          --cream:           #f7f9f8;
          --white:           #ffffff;
        }

        /* ─── MOBILE FIRST BASE (≤768px) ─── */
        .wc-section {
          background: var(--cream);
          padding: 4rem 1.25rem;
          overflow: hidden;
          position: relative;
          text-align: center;
        }

        .wc-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, var(--primary-border) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.35;
          pointer-events: none;
        }

        .wc-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3.5rem;
          position: relative;
        }

        .wc-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .wc-eyebrow.in { opacity: 1; transform: none; }
        .wc-eyebrow-line { width: 24px; height: 1px; background: var(--primary); }

        .wc-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1.1;
          color: var(--ink);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .wc-heading.in { opacity: 1; transform: none; }
        .wc-heading em { font-style: italic; font-weight: 300; color: var(--primary); }

        .wc-intro-col { display: flex; flex-direction: column; gap: 1.5rem; align-items: center; }
        
        .wc-intro {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--ink-soft);
          max-width: 500px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s;
        }
        .wc-intro.in { opacity: 1; transform: none; }

        .wc-stat-row {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.65s ease 0.28s, transform 0.65s ease 0.28s;
          width: 100%;
          flex-wrap: wrap;
        }
        .wc-stat-row.in { opacity: 1; transform: none; }
        
        .wc-stat { display: flex; flex-direction: column; gap: 2px; align-items: center; }
        .wc-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }
        .wc-stat-label {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-soft);
        }

        /* ─── GRID REASONS (Mobile Optimized) ─── */
        .wc-grid {
          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid var(--primary-border);
          background: var(--white);
          text-align: left;
        }

        .wc-card {
          position: relative;
          padding: 2.25rem 1.5rem;
          border-bottom: 1px solid var(--primary-border);
          background: var(--white);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease, background 0.3s ease;
        }
        .wc-card.in { opacity: 1; transform: none; }
        .wc-card:last-child { border-bottom: none; }

        .wc-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1;
          color: rgba(45,140,127,0.12);
          margin-bottom: 0.75rem;
        }

        .wc-card-body { display: flex; flex-direction: column; gap: 0.65rem; }
        .wc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 600;
          line-height: 1.25;
          color: var(--ink);
        }
        .wc-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          line-height: 1.65;
          color: var(--ink-soft);
        }

        .wc-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          font-size: 0.6rem;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--primary);
          border: 1px solid var(--primary-border);
          background: var(--primary-muted);
          width: fit-content;
          margin-top: 0.5rem;
        }

        /* ─── TABLET UPGRADES (768px - 1024px) ─── */
        @media (min-width: 640px) {
          .wc-grid { grid-template-columns: 1fr 1fr; }
          .wc-card:nth-child(odd) { border-right: 1px solid var(--primary-border); }
          .wc-card:nth-child(5) { grid-column: 1 / -1; border-right: none; }
          .wc-card:nth-child(4) { border-bottom: none; }
        }

        /* ─── DESKTOP (UNTOUCHED UI AS REQUESTED) ─── */
        @media (min-width: 1025px) {
          .wc-section { padding: clamp(5rem, 10vw, 9rem) clamp(1.5rem, 7vw, 7rem); text-align: left; }
          .wc-section::before { background_size: 32px 32px; }
          .wc-header { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem 6rem; align-items: end; text-align: left; }
          .wc-eyebrow { justify-content: flex-start; margin-bottom: 1.4rem; font-size: 0.68rem; }
          .wc-eyebrow-line { width: 32px; }
          .wc-heading { font-size: clamp(2.6rem, 4.5vw, 4.2rem); }
          .wc-intro-col { align-items: flex-start; gap: 1.4rem; }
          .wc-intro { font-size: clamp(0.92rem, 1.1vw, 1.05rem); text-align: left; line-height: 1.82; }
          .wc-stat-row { justify-content: flex-start; gap: 2.5rem; }
          .wc-stat-num { font-size: 2.2rem; }
          .wc-stat { align-items: flex-start; }
          .wc-grid { grid-template-columns: 1fr 1fr; text-align: left; }
          .wc-card { padding: clamp(2rem, 3.5vw, 3rem) clamp(1.75rem, 3vw, 2.75rem); }
          .wc-card:nth-child(2n) { border-right: none; }
          .wc-card:nth-child(3), .wc-card:nth-child(4) { border-bottom: none; }
          .wc-card:last-child { 
            grid-column: 1 / -1; 
            display: grid; 
            grid-template-columns: auto 1fr; 
            gap: 2.5rem; 
            align-items: start; 
            border-bottom: none;
          }
          .wc-card:last-child .wc-num { font-size: 5rem; margin-bottom: 0; align-self: center; }
          .wc-num { font-size: 3.8rem; }
          .wc-card:hover { background: rgba(45,140,127,0.025); }
          .wc-card:hover::before { transform: scaleX(1); }
          .wc-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
            background: linear-gradient(to right, var(--primary), var(--primary-light));
            transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
          }
          .wc-title::after {
            content: ''; position: absolute; bottom: 0; left: 0; height: 1px; width: 0;
            background: var(--primary); transition: width 0.45s ease;
          }
          .wc-card:hover .wc-title::after { width: 40px; }
          .wc-title { position: relative; padding-bottom: 0.65rem; }
        }
      `}</style>

      <section className="wc-section">
        <div className="wc-header" ref={header.ref}>
          <div>
            <div className={`wc-eyebrow${header.inView ? " in" : ""}`}>
              <span className="wc-eyebrow-line" />
              Why Choose Dr. Verma
            </div>
            <h2 className={`wc-heading${header.inView ? " in" : ""}`}>
              The Right <em>Surgeon</em><br />for Your Recovery
            </h2>
          </div>

          <div className="wc-intro-col">
            <p className={`wc-intro${header.inView ? " in" : ""}`}>
              With over 10 years of experience, Dr. Verma focuses on orthopaedic surgery including joint replacement, arthroscopy, and complex trauma reconstruction.
            </p>
            <div className={`wc-stat-row${header.inView ? " in" : ""}`}>
              <div className="wc-stat">
                <span className="wc-stat-num">10+</span>
                <span className="wc-stat-label">Years Experience</span>
              </div>
              <div className="wc-stat">
                <span className="wc-stat-num">6</span>
                <span className="wc-stat-label">Speciality Areas</span>
              </div>
              <div className="wc-stat">
                <span className="wc-stat-num">3</span>
                <span className="wc-stat-label">Premier Hospitals</span>
              </div>
            </div>
          </div>
        </div>

        <div className="wc-grid" ref={grid.ref}>
          {reasons.map((r, i) => (
            <div key={r.n} className={`wc-card${grid.inView ? " in" : ""}`} 
                 style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="wc-num">{r.n}</div>
              <div className="wc-card-body">
                <h3 className="wc-title">{r.title}</h3>
                <p className="wc-body">{r.body}</p>
                {i === 0 && <span className="wc-tag">Core Speciality</span>}
                {i === 2 && <span className="wc-tag">Academic Foundation</span>}
                {i === 4 && <span className="wc-tag">Patient-First Approach</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}