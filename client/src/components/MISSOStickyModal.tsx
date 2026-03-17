import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type TabId = "overview" | "how" | "advantages" | "benefits" | "specialist";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview",   label: "Overview"    },
  { id: "how",        label: "How It Works" },
  { id: "advantages", label: "Advantages"  },
  { id: "benefits",   label: "Benefits"    },
  { id: "specialist", label: "Specialist"  },
];

/* Image paths — served from /public/images/Robotic/ */
const IMG = {
  main:  "/images/Robotic/img3.jpeg",
  img1:  "/images/Robotic/img1.jpeg",
  img2:  "/images/Robotic/img2.jpeg",
  img3:  "/images/Robotic/img3.jpeg",
  img4:  "/images/Robotic/img4.jpeg",
};

const STEPS = [
  { num: "1", title: "3D CT Scan",               desc: "A precise scan maps your bones and joint anatomy before surgery — every measurement captured with sub-millimeter accuracy."               },
  { num: "2", title: "Personalised Plan",         desc: "The surgeon designs a surgical plan tailored entirely to your anatomy — every cut, angle, and implant position mapped in advance."       },
  { num: "3", title: "Robotic Guidance",          desc: "MISSO guides the surgeon in real time, showing exactly where to cut and place the implant. The surgeon stays fully in control."          },
  { num: "4", title: "Real-Time Adjustments",     desc: "If conditions change mid-operation the plan adapts instantly. Sensors monitor every movement and can halt the system if anything deviates." },
  { num: "5", title: "Precise, Consistent Result",desc: "Standardised bone prep and optimal implant placement deliver reproducible, high-quality outcomes and a faster recovery."                   },
];

const ADV = [
  { num: "01", title: "Sub-Millimeter Precision",          desc: "The robotic system achieves accuracy finer than a millimetre — ensuring implants sit at exactly the right position and angle for stable, lasting joint function. Impossible to replicate consistently by hand." },
  { num: "02", title: "Personalised Surgical Planning",    desc: "Every 3D CT scan builds a complete picture of the patient's unique anatomy. The surgeon designs a plan tailored entirely to that individual — every cut, angle, and implant measurement customised."           },
  { num: "03", title: "Enhanced Safety Protocols",         desc: "Real-time sensors monitor every stage of the procedure. If anything deviates from the pre-approved surgical plan, the system halts instantly — keeping the patient protected throughout."                       },
  { num: "04", title: "Live Intraoperative Adjustments",   desc: "The surgeon remains fully in charge of every decision. MISSO supports live plan modifications mid-operation — combining robotic precision with expert clinical judgment."                                         },
  { num: "05", title: "Reproducible, Consistent Outcomes", desc: "Standardised bone preparation and optimal implant positioning reduce surgical variability — producing reproducible, high-quality results that support long-term joint health."                                    },
];

const BENEFITS = [
  { title: "Exact implant positioning",    desc: "Sub-mm accuracy every time"                         },
  { title: "Better joint alignment",       desc: "Balanced, natural movement"                         },
  { title: "Reduced surgical variability", desc: "Consistent results across every patient"            },
  { title: "Faster recovery",              desc: "Back to normal life sooner"                         },
  { title: "Improved functional outcome",  desc: "Greater range of motion and long-term joint health" },
];

export default function MISSOStickyModal() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [openAdv,   setOpenAdv]   = useState<number | null>(null);
  const [mounted,   setMounted]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow    = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow    = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow    = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  const open  = () => { setIsOpen(true); setActiveTab("overview"); setOpenAdv(null); };
  const close = () => setIsOpen(false);

  /* ── Tab renderers ─────────────────────────────────────── */

  const renderOverview = () => (
    <div className="msm-tab-content">

      {/* Image left + text right — same pattern as How It Works */}
      <div className="msm-split-row">
        <div className="msm-split-img-wrap">
          <img src={IMG.main} alt="MISSO Robotic Surgery" className="msm-split-img" />
        </div>
        <div className="msm-split-text">
          <p className="msm-split-lead">
            The MISSO Robotic System combines 3D CT imaging, computer planning, and real-time
            robotic guidance — delivering a knee replacement built entirely around your anatomy.
          </p>
          {/* <p className="msm-split-body">
            Every implant is positioned with sub-millimeter precision, ensuring optimal joint
            alignment and long-term stability. The surgeon remains fully in control throughout.
          </p> */}
          {/* <p className="msm-split-body">
            Patients benefit from faster recovery, reduced variability, and outcomes that are
            consistently reproducible — a new standard in orthopaedic care.
          </p> */}
        </div>
      </div>

      {/* Stats */}
      <div className="msm-stats-grid">
        {[
          { val: "<1mm",  label: "Accuracy"     },
          { val: "3D CT", label: "Pre-op Plan"  },
          { val: "100%",  label: "Personalised" },
          { val: "5",     label: "Step Process" },
        ].map((s, i) => (
          <div className="msm-stat-card" key={i}>
            <span className="msm-stat-val">{s.val}</span>
            <span className="msm-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="msm-overview-quote">
        <p className="msm-quote-text">
          "The MISSO system amplifies surgical expertise — giving surgeons precision and patients care
          that is designed just for them."
        </p>
        <p className="msm-quote-attr">Dr. Nishant Verma · MISSO Robotic Specialist</p>
      </div>
    </div>
  );

  const renderHow = () => (
    <div className="msm-tab-content">

      {/* Image left + intro right — unified split-row pattern */}
      <div className="msm-split-row">
        <div className="msm-split-img-wrap">
          <img src={IMG.img1} alt="Robotic surgery in progress" className="msm-split-img" />
        </div>
        <div className="msm-split-text">
          <p className="msm-split-lead">
            Every MISSO procedure follows a precise five-step workflow — from pre-operative imaging
            through to the final implant placement — ensuring nothing is left to chance.
          </p>
          {/* <p className="msm-split-body">
            The surgeon remains fully in charge of every decision. MISSO acts as a precision
            co-pilot — guiding, not replacing, the expert hands performing the operation.
          </p>
          <p className="msm-split-body">
            Real-time sensor feedback means the system can adapt or halt instantly, adding a
            layer of safety that conventional surgery simply cannot match.
          </p> */}
        </div>
      </div>

      {/* Steps */}
      {STEPS.map((s, i) => (
        <div key={i}>
          <div className="msm-step-row">
            <div className="msm-step-num">{s.num}</div>
            <div className="msm-step-body">
              <p className="msm-step-title">{s.title}</p>
              <p className="msm-step-desc">{s.desc}</p>
            </div>
          </div>
          {i < STEPS.length - 1 && <div className="msm-step-connector" />}
        </div>
      ))}
    </div>
  );

  const renderAdvantages = () => (
    <div className="msm-tab-content">
      {ADV.map((a, i) => (
        <div key={i} className="msm-adv-wrap">
          <button
            className={`msm-adv-row${openAdv === i ? " msm-adv-open" : ""}`}
            onClick={() => setOpenAdv(openAdv === i ? null : i)}
          >
            <div className="msm-adv-num">{a.num}</div>
            <div className="msm-adv-title">{a.title}</div>
            <svg
              className="msm-adv-chevron"
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              style={{ transform: openAdv === i ? "rotate(90deg)" : "none" }}
            >
              <path d="M6 4l4 4-4 4" stroke="#2D8C7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {openAdv === i && (
            <div className="msm-adv-detail">{a.desc}</div>
          )}
        </div>
      ))}
    </div>
  );

  const renderBenefits = () => (
    <div className="msm-tab-content">

      {/* Image left + text right — same pattern as How It Works */}
      <div className="msm-split-row">
        <div className="msm-split-img-wrap">
          <img src={IMG.img2} alt="Patient outcome" className="msm-split-img" />
        </div>
        <div className="msm-split-text">
          <p className="msm-split-lead">
            MISSO-assisted surgery delivers measurably better outcomes — from the operating table
            through to full recovery and long-term joint health.
          </p>
          {/* <p className="msm-split-body">
            Patients experience faster rehabilitation, a greater range of motion, and significantly
            reduced surgical variability compared to conventional techniques.
          </p>
          <p className="msm-split-body">
            Every benefit is a direct result of sub-millimeter precision, personalised planning,
            and the consistent execution that only robotic guidance can provide.
          </p> */}
        </div>
      </div>

      <div className="msm-benefits-grid">
        {BENEFITS.map((b, i) => (
          <div className="msm-benefit-card" key={i}>
            <div className="msm-benefit-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9l4 4 8-8" stroke="#2D8C7F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="msm-benefit-title">{b.title}</p>
              <p className="msm-benefit-desc">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSpecialist = () => (
    <div className="msm-tab-content">

      {/* Image left + doctor info right — same pattern as How It Works */}
      <div className="msm-split-row">
        <div className="msm-split-img-wrap">
          <img src={IMG.img4} alt="Dr. Nishant Verma" className="msm-split-img" />
        </div>
        <div className="msm-split-text">
          <div className="msm-split-doc-header">
            <div className="msm-doc-avatar">NV</div>
            <div>
              <p className="msm-doc-name">Dr. Nishant Verma</p>
              <p className="msm-doc-role">Orthopaedic Surgeon</p>
              <p className="msm-doc-spec">MISSO Robotic Joint Replacement Specialist</p>
            </div>
          </div>
          {/* <p className="msm-split-body">
            The surgeon's skill is always the most critical element in joint replacement surgery.
            The MISSO robotic system amplifies that expertise — giving greater confidence during
            complex procedures.
          </p> */}
          {/* <p className="msm-split-body">
            With Dr. Nishant Verma you get cutting-edge robotic technology combined with
            deeply personalised care — a surgery designed entirely for you.
          </p> */}
        </div>
      </div>

      <div className="msm-expertise-block">
        <p className="msm-expertise-label">Expertise meets innovation</p>
        <p className="msm-expertise-text">
          When you choose MISSO-assisted surgery with Dr. Verma, you benefit from a level of
          precision planning and execution that was simply not possible before robotic technology.
          Every procedure is rehearsed digitally before a single incision is made.
        </p>
      </div>

      <div className="msm-doc-actions">
  <a href="tel:9416091718">
    <button className="msm-cta-primary">Book Consultation</button>
  </a>

  <a href="tel:9416091718">
    <button className="msm-cta-secondary">Learn More</button>
  </a>
</div>
    </div>
  );

  const CONTENT: Record<TabId, React.ReactNode> = {
    overview:   renderOverview(),
    how:        renderHow(),
    advantages: renderAdvantages(),
    benefits:   renderBenefits(),
    specialist: renderSpecialist(),
  };

  /* ── Styles ─────────────────────────────────────────────── */
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@400;500;600&display=swap');

    /* ── Trigger bar ────────────────────────────────── */
    .msm-trigger-wrap {
      position: fixed;
      bottom: 6rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999;
      width: calc(100% - 2rem);
      max-width: 480px;
      animation: msmBarIn 0.7s 0.4s cubic-bezier(0.22,1,0.36,1) both;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }
    @keyframes msmBarIn {
      from { opacity: 0; bottom: 2rem; }
      to   { opacity: 1; bottom: 6rem; }
    }
    @media (min-width: 768px) {
      .msm-trigger-wrap {
        bottom: 1.5rem;
        max-width: 540px;
        animation-name: msmBarInDesktop;
      }
    }
    @keyframes msmBarInDesktop {
      from { opacity: 0; bottom: -2rem; }
      to   { opacity: 1; bottom: 1.5rem; }
    }

    .msm-pill {
      display: flex; align-items: center; justify-content: space-between;
      gap: .75rem; padding: .5rem .5rem .5rem 1.25rem;
      background: rgba(10,24,22,.94);
      backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
      border-radius: 100px;
      border: 1px solid rgba(255,255,255,.08);
      box-shadow: 0 10px 40px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.05);
    }
    .msm-pill-lhs { display: flex; align-items: center; gap: .75rem; flex: 1; min-width: 0; }
    .msm-live-dot { position: relative; width: 8px; height: 8px; flex-shrink: 0; }
    .msm-live-dot::before {
      content: ''; position: absolute; inset: -5px; border-radius: 50%;
      border: 1.5px solid rgba(58,168,153,.4);
      animation: msmPing 2.4s ease-out infinite;
    }
    .msm-live-dot::after {
      content: ''; position: absolute; inset: 0;
      border-radius: 50%; background: #3aa899;
    }
    @keyframes msmPing {
      0%  { transform: scale(.7);  opacity: .8; }
      80% { transform: scale(2.2); opacity: 0;  }
      100%{ transform: scale(2.2); opacity: 0;  }
    }
    .msm-pill-copy  { display: flex; flex-direction: column; min-width: 0; }
    .msm-pill-eye   { font-size: 9px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: #3aa899; line-height: 1; margin-bottom: 2px; }
    .msm-pill-title { font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 400; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.2; margin: 0; }
    .msm-pill-btn {
      flex-shrink: 0; display: flex; align-items: center; gap: 6px;
      min-height: 44px; padding: 0 1.25rem;
      background: #2D8C7F; color: #fff; border: none; border-radius: 100px;
      font-family: 'DM Sans', sans-serif; font-size: .8rem; font-weight: 600;
      cursor: pointer; white-space: nowrap;
      box-shadow: 0 2px 14px rgba(45,140,127,.4);
      transition: background .2s, transform .15s;
      -webkit-tap-highlight-color: transparent; touch-action: manipulation; -webkit-appearance: none;
    }
    .msm-pill-btn:hover  { background: #3aa899; }
    .msm-pill-btn:active { transform: scale(.97); }

    /* ── Spacer ─────────────────────────────────────── */
    .msm-spacer { display: block; height: 152px; pointer-events: none; }
    @media (min-width: 768px) { .msm-spacer { height: 96px; } }

    /* ── Backdrop ───────────────────────────────────── */
    .msm-backdrop {
      position: fixed; inset: 0;
      background: rgba(10,20,18,.65);
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      z-index: 1000; opacity: 0; visibility: hidden;
      transition: opacity .25s, visibility .25s;
      cursor: pointer; touch-action: manipulation;
    }
    .msm-backdrop.active { opacity: 1; visibility: visible; }

    /* ── Modal shell ────────────────────────────────── */
    .msm-modal {
      position: fixed; z-index: 1001;
      background: #fff;
      box-shadow: 0 24px 80px rgba(0,0,0,.2);
      opacity: 0; visibility: hidden;
      transition: all .35s cubic-bezier(.22,1,.36,1);
      display: flex; flex-direction: column; overflow: hidden;
      font-family: 'DM Sans', sans-serif;
    }
    .msm-modal.active { opacity: 1; visibility: visible; }

    /* ══ MOBILE ≤ 767px ══════════════════════════════ */
    @media (max-width: 767px) {
      .msm-modal {
        bottom: 0; left: 0; right: 0; top: auto;
        height: 88svh; height: 88vh;
        border-radius: 1.5rem 1.5rem 0 0;
        transform: translateY(100%);
      }
      .msm-modal.active { transform: translateY(0); }
      .msm-modal-left   { display: none !important; }
      .msm-modal-right  { display: none !important; }

      .msm-drag { width: 2.5rem; height: 3px; background: rgba(13,28,26,.1); border-radius: 2px; margin: .875rem auto 0; flex-shrink: 0; }

      .msm-mobile-header { display: block !important; padding: 1rem 1.25rem .625rem; border-bottom: 1px solid #e8eded; flex-shrink: 0; }
      .msm-mobile-kicker { font-size: 9px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: #2D8C7F; margin-bottom: 2px; }
      .msm-mobile-h      { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 300; color: #0d1c1a; line-height: 1.1; margin: 0; }
      .msm-mobile-h em   { font-style: italic; color: #2D8C7F; }

      .msm-mobile-tabs { display: flex !important; overflow-x: auto; scrollbar-width: none; padding: .5rem 1rem; gap: .375rem; border-bottom: 1px solid #e8eded; flex-shrink: 0; -webkit-overflow-scrolling: touch; }
      .msm-mobile-tabs::-webkit-scrollbar { display: none; }
      .msm-mobile-tab {
        flex-shrink: 0; min-height: 34px; padding: 0 .875rem;
        border-radius: 100px; font-family: 'DM Sans', sans-serif;
        font-size: .73rem; font-weight: 500; color: #42605d;
        background: #f0f4f3; border: 1px solid transparent;
        cursor: pointer; white-space: nowrap;
        transition: background .18s, color .18s;
        touch-action: manipulation; -webkit-tap-highlight-color: transparent; -webkit-appearance: none;
      }
      .msm-mobile-tab.active { background: #2D8C7F; color: #fff; }
      .msm-mobile-tab:active  { opacity: .75; }

      .msm-mobile-pane { display: block !important; flex: 1; overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; padding: 1.125rem; scrollbar-width: none; }
      .msm-mobile-pane::-webkit-scrollbar { display: none; }

      .msm-modal-footer { padding: .875rem 1.25rem; border-top: 1px solid #e8eded; background: #f8fafa; flex-shrink: 0; }

      /* Mobile: split-row stacks vertically, image height fixed */
      .msm-split-img-wrap { height: 170px; }
    }

    /* ══ TABLET 768–1023px ═══════════════════════════ */
    @media (min-width: 768px) and (max-width: 1023px) {
      .msm-modal { top: 50%; left: 50%; transform: translate(-50%,-60%); width: 90vw; max-width: 700px; max-height: 85vh; border-radius: 1.25rem; }
      .msm-modal.active { transform: translate(-50%,-50%); }
      .msm-modal-left  { display: none !important; }
      .msm-modal-right { display: none !important; }
      .msm-drag { display: none !important; }

      .msm-mobile-header { display: block !important; padding: 1.75rem 2rem 1rem; border-bottom: 1px solid #e8eded; flex-shrink: 0; }
      .msm-mobile-kicker { font-size: 9px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: #2D8C7F; margin-bottom: .375rem; }
      .msm-mobile-h      { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 300; color: #0d1c1a; line-height: 1.1; margin: 0; }
      .msm-mobile-h em   { font-style: italic; color: #2D8C7F; }

      .msm-mobile-tabs { display: flex !important; overflow-x: auto; scrollbar-width: none; padding: .625rem 2rem; gap: .375rem; border-bottom: 1px solid #e8eded; flex-shrink: 0; }
      .msm-mobile-tabs::-webkit-scrollbar { display: none; }
      .msm-mobile-tab { flex-shrink: 0; min-height: 36px; padding: 0 1rem; border-radius: 100px; font-family: 'DM Sans', sans-serif; font-size: .8rem; font-weight: 500; color: #42605d; background: #f0f4f3; border: 1px solid transparent; cursor: pointer; white-space: nowrap; transition: background .18s, color .18s; -webkit-appearance: none; }
      .msm-mobile-tab.active { background: #2D8C7F; color: #fff; }

      .msm-mobile-pane { display: block !important; flex: 1; overflow-y: auto; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; padding: 1.75rem 2rem; scrollbar-width: none; }
      .msm-mobile-pane::-webkit-scrollbar { display: none; }

      .msm-modal-footer { padding: 1.25rem 2rem; border-top: 1px solid #e8eded; background: #f8fafa; flex-shrink: 0; }

      /* Tablet: split-row image col width */
      .msm-split-row { grid-template-columns: 200px 1fr; }
    }

    /* ══ DESKTOP ≥ 1024px ════════════════════════════ */
    @media (min-width: 1024px) {
      .msm-modal { top: 50%; left: 50%; transform: translate(-50%,-60%); width: 90vw; max-width: 1100px; max-height: 85vh; border-radius: 1.25rem; flex-direction: row; }
      .msm-modal.active { transform: translate(-50%,-50%); }
      .msm-drag          { display: none !important; }
      .msm-mobile-header { display: none !important; }
      .msm-mobile-tabs   { display: none !important; }
      .msm-mobile-pane   { display: none !important; }

      .msm-modal-left {
        display: flex !important; flex-direction: column;
        width: 260px; min-width: 260px;
        background: #f4f7f6; border-right: 1px solid #e0e8e7;
        padding: 2rem 1.5rem; overflow-y: auto; scrollbar-width: none;
      }
      .msm-modal-left::-webkit-scrollbar { display: none; }
      .msm-left-kicker { font-size: 9px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: #2D8C7F; margin-bottom: .625rem; }
      .msm-left-title  { font-family: 'Cormorant Garamond', serif; font-size: 1.75rem; font-weight: 300; color: #0d1c1a; line-height: 1.1; margin: 0 0 .625rem; }
      .msm-left-title em { font-style: italic; color: #2D8C7F; }
      .msm-left-sub    { font-size: .8rem; color: #42605d; line-height: 1.6; margin-bottom: 1.75rem; }

      .msm-tab-nav-desktop { display: flex !important; flex-direction: column; gap: .25rem; margin-top: auto; }
      .msm-tab-nav-btn {
        display: flex; align-items: center; gap: .75rem;
        padding: .75rem 1rem; border-radius: .75rem;
        background: none; border: none; cursor: pointer;
        font-family: 'DM Sans', sans-serif; font-size: .85rem; font-weight: 500;
        color: #42605d; text-align: left;
        transition: background .18s, color .18s; -webkit-appearance: none;
      }
      .msm-tab-nav-btn:hover  { background: #e8efee; color: #0d1c1a; }
      .msm-tab-nav-btn.active { background: #2D8C7F; color: #fff; }
      .msm-tab-nav-num { font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 300; opacity: .5; min-width: 20px; }
      .msm-tab-nav-btn.active .msm-tab-nav-num { opacity: .7; }

      .msm-modal-right { display: flex !important; flex-direction: column; flex: 1; min-width: 0; overflow: hidden; }
      .msm-right-pane  { flex: 1; overflow-y: auto; padding: 2.5rem; scrollbar-width: thin; scrollbar-color: #c8d8d6 transparent; }
      .msm-right-pane::-webkit-scrollbar       { width: 5px; }
      .msm-right-pane::-webkit-scrollbar-thumb { background: #c8d8d6; border-radius: 3px; }

      .msm-modal-footer { padding: 1.25rem 2.5rem; border-top: 1px solid #e0e8e7; background: #f8fafa; flex-shrink: 0; }

      /* Desktop: split-row image col slightly wider */
      .msm-split-row { grid-template-columns: 240px 1fr; }
    }

    /* ── Close button ───────────────────────────────── */
    .msm-close-btn {
      position: absolute; top: 1rem; right: 1rem;
      width: 2.25rem; height: 2.25rem; border-radius: 50%;
      background: rgba(13,28,26,.06); border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background .2s, transform .25s; z-index: 5;
      touch-action: manipulation; -webkit-tap-highlight-color: transparent;
    }
    .msm-close-btn:hover  { background: rgba(13,28,26,.12); transform: rotate(90deg); }
    .msm-close-btn:active { background: rgba(13,28,26,.18); }

    /* ── Footer ─────────────────────────────────────── */
    .msm-modal-footer { display: flex; gap: .75rem; align-items: center; }
    .msm-footer-close {
      display: flex; align-items: center; gap: 6px;
      padding: .625rem 1.25rem; min-height: 40px;
      background: #fff; color: #42605d; border: 1px solid #cdd8d6; border-radius: .625rem;
      font-family: 'DM Sans', sans-serif; font-size: .85rem; font-weight: 500;
      cursor: pointer; transition: background .2s, border-color .2s, color .2s;
      touch-action: manipulation; -webkit-appearance: none;
    }
    .msm-footer-close:hover { background: #f0f4f3; border-color: #2D8C7F; color: #2D8C7F; }
    .msm-footer-book {
      display: flex; align-items: center; gap: 6px;
      padding: .625rem 1.25rem; min-height: 40px;
      background: #2D8C7F; color: #fff; border: none; border-radius: .625rem;
      font-family: 'DM Sans', sans-serif; font-size: .85rem; font-weight: 600;
      cursor: pointer; transition: background .2s; touch-action: manipulation; -webkit-appearance: none;
      box-shadow: 0 2px 10px rgba(45,140,127,.35);
    }
    .msm-footer-book:hover { background: #3aa899; }
    .msm-footer-mobileonly { display: flex; }
    @media (min-width: 1024px) { .msm-footer-mobileonly { display: none !important; } }
    .msm-modal-right .msm-modal-footer { display: none; }
    @media (min-width: 1024px) { .msm-modal-right .msm-modal-footer { display: flex !important; } }

    /* ══════════════════════════════════════════════════
       IMAGE COMPONENTS
    ══════════════════════════════════════════════════ */

    /* ══════════════════════════════════════════════════
       SHARED SPLIT ROW — image left, text right
       Used by: Overview, How It Works, Benefits, Specialist
       Mobile: stacks vertically (image top, text below)
       Tablet+: side-by-side grid, image fixed width
    ══════════════════════════════════════════════════ */
    .msm-split-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      align-items: stretch;
    }
    @media (min-width: 768px) {
      .msm-split-row { grid-template-columns: 210px 1fr; gap: 1.25rem; align-items: center; }
    }

    /* Image cell */
    .msm-split-img-wrap {
      width: 100%;
      height: 180px;
      border-radius: .875rem;
      overflow: hidden;
      flex-shrink: 0;
    }
    @media (min-width: 768px) { .msm-split-img-wrap { height: 100%; min-height: 180px; } }
    .msm-split-img {
      width: 100%; height: 100%;
      object-fit: cover; object-position: center;
      display: block;
      transition: transform .5s ease;
    }
    .msm-split-img-wrap:hover .msm-split-img { transform: scale(1.04); }

    /* Text cell */
    .msm-split-text {
      display: flex;
      flex-direction: column;
      gap: .625rem;
    }
    /* Lead paragraph — teal left-border accent, same as how-it-works */
    .msm-split-lead {
      font-size: .875rem; color: #42605d; line-height: 1.72;
      border-left: 3px solid #2D8C7F;
      border-radius: 0 .5rem .5rem 0;
      padding: .75rem 1rem;
      background: rgba(45,140,127,.04);
      margin: 0;
    }
    /* Body paragraphs */
    .msm-split-body {
      font-size: .825rem; color: #42605d; line-height: 1.7; margin: 0;
    }

    /* Specialist: doctor name block inside the text column */
    .msm-split-doc-header {
      display: flex; align-items: center; gap: .875rem;
      padding: .875rem 1rem;
      background: #0d1c1a;
      border-radius: .875rem;
      margin-bottom: .125rem;
    }

    /* ── Shared tab content ─────────────────────────── */
    .msm-tab-content { display: flex; flex-direction: column; gap: .875rem; }

    .msm-overview-body { font-size: .875rem; color: #42605d; line-height: 1.72; margin: 0; }
    .msm-stats-grid    { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; }
    @media (min-width: 768px) { .msm-stats-grid { grid-template-columns: repeat(4,1fr); } }
    .msm-stat-card  { display: flex; flex-direction: column; gap: 3px; background: #f4f7f6; border-radius: .75rem; padding: .875rem 1rem; border: 1px solid #e0e8e7; }
    .msm-stat-val   { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #0d1c1a; line-height: 1; }
    .msm-stat-label { font-size: 10px; font-weight: 500; color: #42605d; text-transform: uppercase; letter-spacing: .06em; }

    .msm-overview-quote { border-left: 3px solid #2D8C7F; border-radius: 0 .75rem .75rem 0; padding: 1rem 1.25rem; background: rgba(45,140,127,.04); }
    .msm-quote-text     { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1rem; color: #0d1c1a; line-height: 1.65; margin: 0 0 .375rem; }
    .msm-quote-attr     { font-size: .75rem; font-weight: 600; color: #2D8C7F; letter-spacing: .04em; margin: 0; }

    .msm-step-row       { display: flex; gap: .875rem; align-items: flex-start; background: #f4f7f6; border-radius: .875rem; padding: .875rem 1rem; border: 1px solid transparent; transition: border-color .2s; }
    .msm-step-row:hover { border-color: rgba(45,140,127,.2); }
    .msm-step-num       { width: 2rem; height: 2rem; border-radius: .625rem; background: rgba(45,140,127,.1); border: 1px solid rgba(45,140,127,.2); display: flex; align-items: center; justify-content: center; font-size: .8rem; font-weight: 600; color: #2D8C7F; flex-shrink: 0; }
    .msm-step-body      { flex: 1; min-width: 0; }
    .msm-step-title     { font-size: .875rem; font-weight: 600; color: #0d1c1a; margin: 0 0 3px; line-height: 1.3; }
    .msm-step-desc      { font-size: .8rem; color: #42605d; line-height: 1.65; margin: 0; }
    .msm-step-connector { width: 2px; height: .625rem; background: rgba(45,140,127,.15); margin-left: calc(1rem + 1rem - 1px); border-radius: 1px; }

    .msm-adv-wrap      { display: flex; flex-direction: column; }
    .msm-adv-row       { display: flex; align-items: center; gap: .875rem; padding: .875rem 1rem; background: #f4f7f6; border-radius: .875rem; border: 1px solid transparent; cursor: pointer; width: 100%; text-align: left; font-family: 'DM Sans', sans-serif; transition: border-color .2s, background .2s; -webkit-appearance: none; touch-action: manipulation; }
    .msm-adv-row:hover { border-color: rgba(45,140,127,.2); background: rgba(45,140,127,.04); }
    .msm-adv-open      { border-color: rgba(45,140,127,.28) !important; background: rgba(45,140,127,.05) !important; }
    .msm-adv-num       { font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 300; color: rgba(45,140,127,.4); min-width: 24px; flex-shrink: 0; }
    .msm-adv-title     { flex: 1; font-size: .875rem; font-weight: 600; color: #0d1c1a; line-height: 1.3; }
    .msm-adv-chevron   { flex-shrink: 0; transition: transform .22s ease; }
    .msm-adv-detail    { background: #fff; border: 1px solid rgba(45,140,127,.18); border-radius: .875rem; padding: 1rem 1.125rem; margin-top: .375rem; font-size: .8125rem; color: #42605d; line-height: 1.72; }

    .msm-benefits-grid      { display: flex; flex-direction: column; gap: .5rem; }
    @media (min-width: 768px) { .msm-benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .625rem; } }
    .msm-benefit-card       { display: flex; align-items: flex-start; gap: .875rem; padding: .875rem 1rem; background: #f4f7f6; border-radius: .875rem; border: 1px solid transparent; transition: border-color .2s, transform .18s; }
    .msm-benefit-card:hover { border-color: rgba(45,140,127,.2); transform: translateX(3px); }
    .msm-benefit-icon       { width: 2rem; height: 2rem; border-radius: .5rem; background: rgba(45,140,127,.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .msm-benefit-title      { font-size: .875rem; font-weight: 600; color: #0d1c1a; margin: 0 0 2px; line-height: 1.3; }
    .msm-benefit-desc       { font-size: .775rem; color: #42605d; line-height: 1.55; margin: 0; }

    .msm-doc-avatar    { width: 3.5rem; height: 3.5rem; border-radius: 50%; background: linear-gradient(135deg,#2D8C7F,#3aa899); display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; font-weight: 400; color: #fff; flex-shrink: 0; border: 2px solid rgba(255,255,255,.2); }
    .msm-doc-name      { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 400; color: #fff; margin: 0 0 2px; }
    .msm-doc-role      { font-size: .7rem; color: rgba(255,255,255,.5); margin: 0 0 1px; }
    .msm-doc-spec      { font-size: .7rem; color: rgba(255,255,255,.38); margin: 0; }
    .msm-expertise-block { border-left: 3px solid #2D8C7F; border-radius: 0 .875rem .875rem 0; padding: 1rem 1.25rem; background: rgba(45,140,127,.04); }
    .msm-expertise-label { font-size: 9px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: #2D8C7F; margin: 0 0 .375rem; }
    .msm-expertise-text  { font-size: .825rem; color: #42605d; line-height: 1.72; margin: 0; }
    .msm-doc-actions   { display: flex; gap: .625rem; }
    .msm-cta-primary   { flex: 1; padding: .75rem; background: #2D8C7F; color: #fff; border: none; border-radius: .75rem; font-family: 'DM Sans', sans-serif; font-size: .85rem; font-weight: 600; cursor: pointer; min-height: 44px; transition: background .2s; -webkit-appearance: none; }
    .msm-cta-primary:hover { background: #3aa899; }
    .msm-cta-secondary { flex: 1; padding: .75rem; background: #f4f7f6; color: #2D8C7F; border: 1px solid rgba(45,140,127,.25); border-radius: .75rem; font-family: 'DM Sans', sans-serif; font-size: .85rem; font-weight: 500; cursor: pointer; min-height: 44px; transition: background .2s; -webkit-appearance: none; }
    .msm-cta-secondary:hover { background: rgba(45,140,127,.08); }
  `;

  if (!mounted) return <div className="msm-spacer" aria-hidden="true" />;

  const tabNums: Record<TabId, string> = {
    overview: "01", how: "02", advantages: "03", benefits: "04", specialist: "05",
  };

  const modalContent = isOpen ? CONTENT[activeTab] : null;

  return (
    <>
      <style>{styles}</style>

      {/* Spacer — keeps Footer clear of pill bar on mobile */}
      <div className="msm-spacer" aria-hidden="true" />

      {createPortal(
        <>
          {/* ── Pill bar ── */}
          <div className="msm-trigger-wrap" role="complementary" aria-label="MISSO Robotic System">
            <div className="msm-pill">
              <div className="msm-pill-lhs">
                <span className="msm-live-dot" aria-hidden="true" />
                <div className="msm-pill-copy">
                  <span className="msm-pill-eye">MISSO Robotic System</span>
                  <p className="msm-pill-title">Robotic Knee Replacement</p>
                </div>
              </div>
              <button className="msm-pill-btn" onClick={open} aria-haspopup="dialog" aria-expanded={isOpen}>
                Explore
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1.5 6h9M7 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ── Backdrop ── */}
          <div className={`msm-backdrop${isOpen ? " active" : ""}`} onClick={close} aria-hidden="true" />

          {/* ── Modal ── */}
          <div className={`msm-modal${isOpen ? " active" : ""}`} role="dialog" aria-modal="true" aria-label="MISSO Robotic Knee Replacement">

            <div className="msm-drag" aria-hidden="true" />

            <button className="msm-close-btn" onClick={close} aria-label="Close">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 1l9 9M10 1L1 10" stroke="#4a5e5b" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Mobile + Tablet: header */}
            <div className="msm-mobile-header">
              <p className="msm-mobile-kicker">MISSO Robotic System</p>
              <h2 className="msm-mobile-h">Surgical Precision, <em>Reimagined</em></h2>
            </div>

            {/* Mobile + Tablet: tabs */}
            <div className="msm-mobile-tabs" role="tablist">
              {TABS.map(t => (
                <button
                  key={t.id} role="tab" aria-selected={activeTab === t.id}
                  className={`msm-mobile-tab${activeTab === t.id ? " active" : ""}`}
                  onClick={() => { setActiveTab(t.id); setOpenAdv(null); }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Mobile + Tablet: pane */}
            <div className="msm-mobile-pane" role="tabpanel">
              {modalContent}
            </div>

            {/* Desktop: left sidebar */}
            <div className="msm-modal-left">
              <p className="msm-left-kicker">MISSO Robotic System</p>
              <h2 className="msm-left-title">Surgical Precision,<br /><em>Reimagined</em></h2>
              <p className="msm-left-sub">Robotic guidance + 3D CT planning = a knee replacement built around you.</p>
              <nav className="msm-tab-nav-desktop" role="tablist">
                {TABS.map(t => (
                  <button
                    key={t.id} role="tab" aria-selected={activeTab === t.id}
                    className={`msm-tab-nav-btn${activeTab === t.id ? " active" : ""}`}
                    onClick={() => { setActiveTab(t.id); setOpenAdv(null); }}
                  >
                    <span className="msm-tab-nav-num">{tabNums[t.id]}</span>
                    {t.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Desktop: right content */}
            <div className="msm-modal-right">
              <div className="msm-right-pane" role="tabpanel">
                {modalContent}
              </div>
              <div className="msm-modal-footer">
                <button className="msm-footer-close" onClick={close}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Close
                </button>
                <a href="tel:9416091718">
                  <button className="msm-footer-book">Book Consultation</button>
                </a>
                
              </div>
            </div>

            {/* Mobile + Tablet footer */}
            <div className="msm-modal-footer msm-footer-mobileonly">
              <button className="msm-footer-close" onClick={close}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Close
              </button>
               <a href="tel:9416091718">
                  <button className="msm-footer-book">Book Consultation</button>
               </a>
              
            </div>

          </div>
        </>,
        document.body
      )}
    </>
  );
}