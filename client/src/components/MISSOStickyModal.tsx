import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import "../App.css";
/* ─────────────────────────────────────────────────
   ROOT FIX: Both the pill bar AND the modal are
   rendered via ReactDOM.createPortal into
   document.body — this escapes ANY parent that has
   transform / overflow:hidden / will-change which
   would otherwise trap position:fixed and kill
   touch/click events on mobile.

   The pill bar uses a pure CSS keyframe animation
   (no JS transform) so position:fixed is never
   composited on a transformed layer.
───────────────────────────────────────────────── */

/* ── Tab config ──────────────────────────────── */
const TABS = [
  {
    id: 'how', label: 'How it works',
    icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 9.5l2.5-4 2.5 2.5 3-5 2.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    id: 'adv', label: 'Advantages',
    icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.3"/><circle cx="6.5" cy="6.5" r="1.5" fill="currentColor"/></svg>,
  },
  {
    id: 'benefits', label: 'Benefits',
    icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 7l2.5 2.5 6.5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    id: 'doctor', label: 'Specialist',
    icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1.5 11.5c0-2.8 2.2-4 5-4s5 1.2 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  },
]

/* ── Data ────────────────────────────────────── */
const STEPS = [
  { title: '3D CT Scan', desc: 'A detailed scan maps your bones and joint anatomy — every measurement captured with sub-millimeter precision before surgery begins.' },
  { title: 'Personalised surgical plan', desc: 'Using your scan data, the surgeon designs a plan tailored entirely to your anatomy — every cut, angle, and implant position mapped in advance.' },
  { title: 'Robotic guidance', desc: 'The MISSO system guides the surgeon in real time, showing exactly where to cut and where to place the implant. The surgeon stays fully in control.' },
  { title: 'Real-time adjustments', desc: 'If conditions change mid-operation, the plan adapts instantly. Sensors monitor every movement and can halt the system if anything deviates.' },
  { title: 'Precise, consistent result', desc: 'Standardised bone prep and optimal implant placement deliver reproducible, high-quality outcomes — and a faster path to recovery.' },
]

const ADV = [
  {
    num: '01', title: 'Sub-millimeter precision', short: 'Accuracy finer than 1mm for perfect placement',
    full: 'The robotic system achieves accuracy finer than a millimetre — ensuring implants sit at exactly the right position and angle for stable, lasting joint function. Impossible to replicate consistently by hand.',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="#2D8C7F" strokeWidth="1.2"/><circle cx="8" cy="8" r="1.5" fill="#2D8C7F"/><path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5" stroke="#2D8C7F" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  },
  {
    num: '02', title: 'Personalised surgical plan', short: 'Your CT scan, your unique surgery',
    full: "Every 3D CT scan builds a complete picture of the patient's unique anatomy. The surgeon designs a plan tailored entirely to that individual — every cut, angle, and implant measurement customised.",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="#2D8C7F" strokeWidth="1.2"/><path d="M5 7h6M5 10h4" stroke="#2D8C7F" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  },
  {
    num: '03', title: 'Enhanced safety protocols', short: 'Sensors halt the system if anything deviates',
    full: 'Real-time sensors monitor every stage. If anything deviates from the pre-approved plan, the system halts instantly — keeping the patient protected throughout.',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L2 4.5v4c0 3.5 2.5 5.5 6 6.5 3.5-1 6-3 6-6.5v-4L8 1.5z" stroke="#2D8C7F" strokeWidth="1.2"/><path d="M5.5 8l1.5 1.5 3-3" stroke="#2D8C7F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    num: '04', title: 'Live intraoperative adjustments', short: 'Surgeon in full control, robotics as co-pilot',
    full: 'The surgeon remains fully in charge. MISSO supports live plan modifications mid-operation — combining robotic precision with expert clinical judgment.',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5h12M2 11h12" stroke="#2D8C7F" strokeWidth="1.2" strokeLinecap="round"/><circle cx="6" cy="5" r="1.75" fill="white" stroke="#2D8C7F" strokeWidth="1.2"/><circle cx="10" cy="11" r="1.75" fill="white" stroke="#2D8C7F" strokeWidth="1.2"/></svg>,
  },
  {
    num: '05', title: 'Reproducible, consistent outcomes', short: 'Standardised results across every procedure',
    full: 'Standardised bone preparation and optimal implant positioning reduce surgical variability — producing reproducible, high-quality results that support long-term joint health.',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 12l3-5 3 3 3-6 3 4" stroke="#2D8C7F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 14.5h12" stroke="#2D8C7F" strokeWidth="1" strokeLinecap="round"/></svg>,
  },
]

const BENEFITS = [
  { title: 'Exact implant positioning', desc: 'Sub-mm accuracy every time', full: false, icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="5" stroke="#2D8C7F" strokeWidth="1.2"/><circle cx="7.5" cy="7.5" r="1.5" fill="#2D8C7F"/></svg> },
  { title: 'Better joint alignment', desc: 'Balanced, natural movement', full: false, icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 11l2.5-4 2.5 2.5 4-6" stroke="#2D8C7F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Reduced variability', desc: 'Consistent results, every patient', full: false, icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 5h11M2 10h11" stroke="#2D8C7F" strokeWidth="1.2" strokeLinecap="round"/><circle cx="5.5" cy="5" r="1.6" fill="white" stroke="#2D8C7F" strokeWidth="1.1"/><circle cx="9.5" cy="10" r="1.6" fill="white" stroke="#2D8C7F" strokeWidth="1.1"/></svg> },
  { title: 'Faster recovery', desc: 'Back to life sooner', full: false, icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 2v4l2.5 2" stroke="#2D8C7F" strokeWidth="1.3" strokeLinecap="round"/><circle cx="7.5" cy="8" r="5.5" stroke="#2D8C7F" strokeWidth="1.2"/></svg> },
  { title: 'Improved functional outcome', desc: 'Greater range of motion and long-term joint health — so you can move, live, and do more', full: true, icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 10l2-3 2.5 2 2-4 2 3 1.5-1.5" stroke="#2D8C7F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
]

/* ── Pane components ─────────────────────────── */
function HowPane() {
  return (
    <div className="misso-pane-inner">
      <div className="misso-steps-list">
        {STEPS.map((s, i) => (
          <div key={i}>
            <div className="misso-step-row">
              <div className="misso-step-num">{i + 1}</div>
              <div className="misso-step-body">
                <p className="misso-step-title">{s.title}</p>
                <p className="misso-step-desc">{s.desc}</p>
              </div>
            </div>
            {i < STEPS.length - 1 && <div className="misso-step-connector" />}
          </div>
        ))}
      </div>
    </div>
  )
}

function AdvPane() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="misso-pane-inner">
      <div className="misso-adv-list">
        {ADV.map((a, i) => (
          <div key={i}>
            <button
              className={`misso-adv-row${open === i ? ' misso-adv-open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="misso-adv-icon">{a.icon}</div>
              <div className="misso-adv-text">
                <p className="misso-adv-row-title">{a.title}</p>
                <p className="misso-adv-row-short">{a.short}</p>
              </div>
              <span className="misso-adv-row-num">{a.num}</span>
              <svg
                className="misso-adv-chevron"
                width="14" height="14" viewBox="0 0 14 14" fill="none"
                style={{ transform: open === i ? 'rotate(90deg)' : 'none', transition: 'transform .22s ease' }}
              >
                <path d="M5 3l4 4-4 4" stroke="#2D8C7F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  className="misso-adv-detail"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  {a.full}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

function BenefitsPane() {
  return (
    <div className="misso-pane-inner">
      <div className="misso-benefits-grid">
        {BENEFITS.map((b, i) => (
          <div key={i} className={`misso-benefit-card${b.full ? ' misso-benefit-card-full' : ''}`}>
            <div className="misso-bcard-icon">{b.icon}</div>
            <div>
              <p className="misso-bcard-title">{b.title}</p>
              <p className="misso-bcard-desc">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DoctorPane() {
  return (
    <div className="misso-pane-inner">
      <div className="misso-doc-card">
        <div className="misso-doc-top">
          <div className="misso-doc-av">NV</div>
          <div>
            <p className="misso-doc-name">Dr. Nishant Verma</p>
            <p className="misso-doc-role">Orthopaedic Surgeon · MISSO Robotic Specialist<br/>Joint Replacement · Robotic-Assisted Surgery</p>
          </div>
        </div>
        <div className="misso-doc-quote">"The MISSO system amplifies surgical expertise — giving surgeons precision and patients care designed just for them."</div>
        <div className="misso-doc-footer">
          <button className="misso-doc-cta">Book Consultation</button>
          <button className="misso-doc-cta2">Learn More</button>
        </div>
      </div>
      <div className="misso-expertise-block">
        <p className="misso-exp-label">Expertise meets innovation</p>
        <p className="misso-exp-text">The surgeon's skill is always the most critical element in joint replacement surgery. The MISSO robotic system amplifies that expertise — giving surgeons greater confidence during complex procedures while delivering care built entirely around the individual patient.</p>
      </div>
    </div>
  )
}

/* ── Main component ──────────────────────────── */
export default function MISSOStickyModal() {
  const [open, setOpen] = useState(false)
  const [tab, setTab]   = useState('how')
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  /* lock body scroll when modal open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [open])

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  const PANES: Record<string, React.ReactNode> = {
    how: <HowPane />,
    adv: <AdvPane />,
    benefits: <BenefitsPane />,
    doctor: <DoctorPane />,
  }

  if (!mounted) return null

  /* ── Portal wrapper: renders outside ALL parent transforms ── */
  return createPortal(
    <>
      {/* ════ PILL BAR ════════════════════════════════
          Pure CSS animation — no JS transform on a
          position:fixed element. Avoids the mobile
          stacking context bug entirely.
      ═════════════════════════════════════════════ */}
      <div className="misso-bar" role="complementary" aria-label="MISSO information">
        <div className="misso-pill">
          <div className="misso-pill-lhs">
            <div className="misso-live" aria-hidden="true">
              <span className="misso-live-dot" />
            </div>
            <div className="misso-pill-copy">
              <span className="misso-pill-eye">MISSO Robotic System</span>
              <p className="misso-pill-title">Robotic Knee Replacement</p>
            </div>
          </div>
          <button
            className="misso-pill-btn"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            Explore
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1.5 6h9M7 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ════ MODAL ═══════════════════════════════════
          Also portalled — escapes parent stacking.
          No transform on position:fixed shell.
      ═════════════════════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="misso-ov-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Sheet — translateY only on the sheet itself, NOT on a fixed element */}
            <div className="misso-modal-wrap" role="dialog" aria-modal="true" aria-label="MISSO Robotic Knee Replacement">
              <motion.div
                className="misso-modal"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Drag handle */}
                <div className="misso-drag" aria-hidden="true" />

                {/* Close */}
                <button className="misso-mclose" onClick={() => setOpen(false)} aria-label="Close">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1 1l9 9M10 1L1 10" stroke="#4a5e5b" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {/* Header — always visible */}
                <div className="misso-mhead">
                  <div className="misso-mhead-kicker">
                    <span className="misso-kicker-dot" aria-hidden="true" />
                    MISSO Robotic System
                  </div>
                  <h2 className="misso-mhead-h">
                    Surgical Precision,<br /><em>Reimagined</em>
                  </h2>
                  <p className="misso-mhead-sub">
                    Robotic guidance + 3D CT planning = a knee replacement built around you.
                  </p>
                  <div className="misso-stats" aria-label="Key statistics">
                    {[
                      { val: '<1mm', label: 'Accuracy' },
                      { val: '3D CT', label: 'Pre-op plan' },
                      { val: '100%', label: 'Personalised' },
                      { val: '5', label: 'Step process' },
                    ].map((s, i) => (
                      <div className="misso-stat" key={i}>
                        <span className="misso-stat-val">{s.val}</span>
                        <span className="misso-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tab bar */}
                <div className="misso-tabs" role="tablist">
                  {TABS.map(t => (
                    <button
                      key={t.id}
                      role="tab"
                      aria-selected={tab === t.id}
                      className={`misso-tab${tab === t.id ? ' misso-tab-active' : ''}`}
                      onClick={() => setTab(t.id)}
                    >
                      {t.icon}
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Pane */}
                <div className="misso-pane" role="tabpanel">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {PANES[tab]}
                    </motion.div>
                  </AnimatePresence>
                </div>

              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>,
    document.body
  )
}