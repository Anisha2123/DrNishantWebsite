import { useState, useEffect } from "react";

const PRIMARY = "#2D8C7F";
const PRIMARY_DARK = "#1F6B61";
const PRIMARY_LIGHT = "#E8F5F3";
const PRIMARY_MID = "#3AADA0";

const services = [
  
  {
  id: 1,
  code: "01",
  title: "Hip Replacement",
  tagline: "Restore Hip Mobility. Live Pain-Free.",
  icon: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="24" cy="16" rx="8" ry="10" />
      <path d="M16 26c0 6 3 14 8 18M32 26c0 6-3 14-8 18" />
      <path d="M14 22h20" />
    </svg>
  ),

  overview:
    "Hip replacement surgery is a procedure in which a damaged hip joint is replaced with an artificial implant made of metal, plastic, or ceramic. It is recommended for patients suffering from severe hip pain, joint damage, or mobility problems when medicines and physiotherapy no longer provide relief.",

  conditions: [
    "Osteoarthritis",
    "Rheumatoid arthritis",
    "Post-traumatic arthritis",
    "Avascular necrosis",
    "Severe hip fractures",
    "Hip joint disorders"
  ],

  symptoms: [
    "Constant hip pain",
    "Difficulty walking or climbing stairs",
    "Joint stiffness",
    "Pain during night",
    "No relief from medicines",
    "Difficulty sitting, bending, or standing"
  ],

  consult: [
    "Pain lasting more than 2–3 months",
    "Pain affecting daily activities",
    "X-ray showing narrowing of joint space"
  ],

  treatment: {
    early: [
      "Medicines",
      "Physiotherapy",
      "Weight reduction",
      "Injections"
    ],

    advanced: [
      "Total Hip Replacement",
      "Partial Hip Replacement",
      "Hip Resurfacing Arthroplasty",
      "Revision Hip Arthroplasty"
    ]
  },

  types: [
    "Total Hip Replacement",
    "Partial Hip Replacement (Hemiarthroplasty)",
    "Hip Resurfacing Arthroplasty",
    "Revision Hip Arthroplasty"
  ],

  recovery:
    "Walking usually begins within 24–48 hours after surgery. Hospital stay is typically 2–5 days. Physiotherapy plays an important role in recovery. Full recovery usually takes 3–6 months depending on the patient’s health condition.",

  risks: [
    "Infection",
    "Blood clots",
    "Hip dislocation",
    "Implant loosening over time",
    "Nerve or blood vessel injury"
  ],

  whyChoose: [
    "Advanced surgical techniques for precise implant placement",
    "Personalized treatment plans",
    "Focus on faster recovery and long-term mobility",
    "Expertise in primary and revision hip replacement",
    "Comprehensive post-operative care"
  ]
},
{
  id: 2,
  code: "02",
  title: "Knee Replacement",
  tagline: "Walk Comfortably. Move Freely.",
  icon: (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="14" r="6" />
      <path d="M18 22c0 8 4 18 6 22M30 22c0 8-4 18-6 22" />
      <path d="M14 22h20" />
    </svg>
  ),

  overview:
    "Knee replacement surgery replaces damaged cartilage and bone in the knee joint with artificial implants. It is recommended for patients suffering from severe knee pain, stiffness, and mobility limitations caused by arthritis or joint degeneration.",

  conditions: [
    "Osteoarthritis",
    "Rheumatoid arthritis",
    "Post-traumatic arthritis",
    "Severe knee deformity",
    "Chronic knee pain and degeneration"
  ],

  symptoms: [
    "Severe knee pain while walking",
    "Difficulty climbing stairs",
    "Knee stiffness and swelling",
    "Pain during rest or sleep",
    "Reduced range of motion"
  ],

  treatment: {
    early: [
      "Medications",
      "Physiotherapy",
      "Lifestyle modification",
      "Weight reduction",
      "Joint injections"
    ],

    advanced: [
      "Total Knee Replacement",
      "Partial Knee Replacement",
      "Revision Knee Replacement"
    ]
  },

  recovery:
    "Patients usually begin walking within 24–48 hours after surgery. Hospital stay is typically 3–5 days. With proper physiotherapy and rehabilitation, most patients regain full mobility within 3–6 months.",

  risks: [
    "Infection",
    "Blood clots",
    "Implant wear or loosening",
    "Knee stiffness",
    "Nerve injury"
  ],

  whyChoose: [
    "Modern minimally invasive surgical techniques",
    "Accurate implant alignment and placement",
    "Focus on faster rehabilitation",
    "Patient-centric treatment approach",
    "Long-lasting joint replacement solutions"
  ],

  consult: "Persistent knee pain for months · Difficulty walking or climbing stairs · Knee stiffness limiting daily activities"
},
  {
    id: 3,
    code: "03",
    title: "Arthroscopy – Knee / Shoulder",
    tagline: "Precision. Minimal Invasion. Maximum Recovery.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="14" />
        <line x1="24" y1="10" x2="24" y2="38" />
        <line x1="10" y1="24" x2="38" y2="24" />
        <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
    overview:
      "Arthroscopy is a minimally invasive procedure where a small camera is inserted into the joint to diagnose and treat problems—without large incisions. Ideal for sports injuries, cartilage damage, and ligament repairs.",
    conditions: [
      "Meniscus & Ligament Tears (ACL/PCL)",
      "Cartilage Damage",
      "Rotator Cuff Tears",
      "Labral Tears & Shoulder Instability",
      "Frozen Shoulder & Impingement",
      "Loose Bodies in Joint",
    ],
    symptoms: [
      "Persistent knee or shoulder pain",
      "Swelling that keeps returning",
      "Locking, catching, or giving-way sensation",
      "Weakness or clicking in the shoulder",
      "Limited range of motion",
    ],
    treatment: {
      early: ["Rest & Activity Modification", "Anti-inflammatory Medications", "Physiotherapy", "Steroid / Lubricant Injections"],
      advanced: ["Arthroscopic Debridement", "Ligament Reconstruction", "Rotator Cuff Repair", "Labral Repair"],
    },
    recovery: "Same-day discharge possible · Basic recovery 2 weeks · Structured rehab 3–6 months · Sports return (ACL) 6–9 months",
    whyChoose: [
      "Expertise in advanced arthroscopic procedures",
      "Precision-based minimally invasive techniques",
      "Detailed pre-surgical assessment",
      "Focus on preserving natural joint structure",
      "Structured post-operative rehabilitation protocol",
      "Emphasis on long-term joint stability",
    ],
    consult: "Joint pain >2–3 weeks · Persistent swelling · Knee locking or giving way · Shoulder pain limiting arm movement",
  },
  {
    id: 4,
    code: "04",
    title: "Pelvis & Acetabulum Trauma",
    tagline: "Complex Fractures. Expert Reconstruction.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 28 Q14 16 24 14 Q34 16 38 28" />
        <path d="M10 28 Q12 38 24 40 Q36 38 38 28" />
        <circle cx="18" cy="30" r="5" />
        <circle cx="30" cy="30" r="5" />
      </svg>
    ),
    overview:
      "Pelvic and acetabular fractures are among the most complex orthopaedic injuries, often resulting from high-energy trauma. Precise surgical reconstruction is critical to restore hip function and prevent long-term arthritis.",
    conditions: [
      "Stable & Displaced Pelvic Fractures",
      "Acetabular (Hip Socket) Fractures",
      "Complex Multi-fragment Fractures",
      "Fracture-Dislocations of the Hip",
      "Post-traumatic Arthritis",
      "Road Traffic & Fall Injuries",
    ],
    symptoms: [
      "Severe hip, groin, or lower back pain",
      "Inability to stand or walk",
      "Swelling and bruising around hip/pelvis",
      "Leg appearing shorter or rotated",
      "Numbness or weakness in the leg",
    ],
    treatment: {
      early: ["Bed Rest", "Limited Weight Bearing", "Pain Management", "Physiotherapy after initial healing"],
      advanced: ["Reduction & Internal Fixation (Plates & Screws)", "Hip Socket Realignment", "Total Hip Replacement (if joint severely damaged)"],
    },
    recovery: "Hospital stay varies by severity · Gradual weight-bearing as advised · Long-term physiotherapy program",
    whyChoose: [
      "Expertise in complex pelvic fracture management",
      "Advanced CT-based surgical planning",
      "Precise reconstruction to restore joint congruence",
      "Joint-preserving approach whenever possible",
      "Multidisciplinary trauma team collaboration",
      "Structured rehabilitation for long-term hip function",
    ],
    consult: "Hip/pelvis pain after accident · Can't walk properly · Leg looks deformed · Increasing swelling or bruising",
  },
  {
    id: 5,
    code: "05",
    title: "Foot & Ankle Surgery",
    tagline: "Every Step, Engineered for You.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 36 Q14 28 18 22 Q22 16 28 14 L36 16" />
        <path d="M12 36 Q20 40 36 38 L38 32 Q30 34 20 30" />
        <path d="M28 14 Q34 18 36 26 L38 32" />
      </svg>
    ),
    overview:
      "Foot and ankle surgery addresses a wide range of conditions—from fractures and ligament tears to deformities and arthritis. The goal is always to restore alignment, stability, and pain-free movement.",
    conditions: [
      "Ankle Fractures & Ligament Tears",
      "Chronic Ankle Instability",
      "Tendon Injuries (Achilles, Peroneal)",
      "Foot Deformities (Flatfoot, Cavus)",
      "Ankle Arthritis",
      "Diabetic Foot Complications",
    ],
    symptoms: [
      "Persistent foot or ankle pain",
      "Swelling that won't resolve",
      "Difficulty bearing weight",
      "Recurrent ankle sprains",
      "Visible foot deformity",
      "Ankle instability or frequent twisting",
    ],
    treatment: {
      early: ["Rest & Immobilization", "Ankle Brace or Cast", "Pain Medications", "Physiotherapy & Shoe Inserts"],
      advanced: ["Fracture Stabilization", "Ligament Reconstruction", "Tendon Repair", "Deformity Correction", "Ankle Fusion or Replacement"],
    },
    recovery: "Day-care or short hospital stay · Cast/boot for several weeks · Return to activities in 6–12 weeks depending on procedure",
    whyChoose: [
      "Expert in foot and ankle trauma and deformity",
      "Minimally invasive surgical techniques",
      "Focus on restoring anatomical alignment",
      "Individualized rehabilitation plan for each patient",
      "Long-term mobility and functional outcomes",
    ],
    consult: "Ankle pain >2–3 weeks · Can't bear weight · Ankle instability · Deformity or shape change visible",
  },
  {
    id: 6,
    code: "06",
    title: "Ilizarov & Limb Salvage",
    tagline: "Save the Limb. Rebuild the Life.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="10" width="28" height="28" rx="14" />
        <circle cx="24" cy="24" r="4" />
        <line x1="10" y1="24" x2="20" y2="24" />
        <line x1="28" y1="24" x2="38" y2="24" />
        <line x1="24" y1="10" x2="24" y2="20" />
        <line x1="24" y1="28" x2="24" y2="38" />
      </svg>
    ),
    overview:
      "The Ilizarov technique uses an external circular fixator to gradually correct bone deformities, bridge bone defects, and equalize limb length differences. Combined with limb salvage surgery, it offers a powerful alternative to amputation.",
    conditions: [
      "Non-union Fractures (Bones Not Healing)",
      "Bone Infections (Osteomyelitis)",
      "Limb Length Discrepancy",
      "Bone Loss After Trauma",
      "Complex Deformity Correction",
      "Previously Failed Fracture Surgeries",
    ],
    symptoms: [
      "Limb appears shorter or crooked",
      "Fracture not healing after several months",
      "Chronic pain at fracture site",
      "Persistent bone infection",
      "Instability in previously operated fractures",
    ],
    treatment: {
      early: ["Detailed evaluation & imaging", "Blood tests for infection markers", "Infection control protocols"],
      advanced: ["Circular External Fixator Application", "Gradual Deformity Correction", "Bone Grafting", "Soft Tissue & Joint Reconstruction"],
    },
    recovery: "Regular frame adjustments · Weight-bearing as advised · Long-term physiotherapy · Serial imaging to monitor bone healing",
    whyChoose: [
      "Extensive experience in trauma and non-union cases",
      "Expertise in Ilizarov reconstruction techniques",
      "Thorough case-by-case evaluation before any procedure",
      "Limb preservation as the primary goal",
      "Infection control protocols in place",
      "Long-term rehabilitation planning",
    ],
    consult: "Fracture not healing after months · Persistent infection · Limb appears shorter/crooked · Amputation has been suggested",
  },
  {
    id: 7,
    code: "07",
    title: "Complex Trauma Reconstruction",
    tagline: "High-Energy Trauma. Structured Reconstruction.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 8 L38 20 L32 40 L16 40 L10 20 Z" />
        <path d="M20 28 L24 16 L28 28" />
        <line x1="19" y1="25" x2="29" y2="25" />
      </svg>
    ),
    overview:
      "Complex trauma reconstruction addresses severe, multi-fragment fractures with bone loss, open wounds, and soft tissue damage—often resulting from high-energy injuries like road accidents or industrial trauma. Staged surgical planning is key.",
    conditions: [
      "Multi-fragment (Comminuted) Fractures",
      "Intra-articular (Joint-involving) Fractures",
      "Open Fractures with Bone Loss",
      "Soft Tissue & Vascular Injuries",
      "Failed Previous Fracture Surgeries",
      "High-velocity & Industrial Trauma",
    ],
    symptoms: [
      "Severe pain after accident",
      "Visibly deformed limb",
      "Open wound with bone visible",
      "Inability to move or bear weight",
      "Numbness, weakness, or swelling in limb",
    ],
    treatment: {
      early: ["Bleeding Control", "Temporary Fracture Stabilization", "Pain Management", "Vital Organ Monitoring"],
      advanced: ["Internal Fixation (Plates, Screws, Rods)", "External Fixation for Complex Cases", "Bone Grafting", "Joint Surface Reconstruction", "Soft Tissue & Plastic Surgery Repair"],
    },
    recovery: "Hospital stay based on injury severity · Gradual weight-bearing program · Physiotherapy protocol · Recovery may take several months",
    whyChoose: [
      "Extensive experience with high-energy trauma",
      "Expert in staged fixation and reconstruction",
      "Multidisciplinary trauma team approach",
      "Limb salvage and function restoration as primary goals",
      "Strict infection control protocols",
      "Personalized rehabilitation for every patient",
    ],
    consult: "Severe pain after accident · Limb deformity · Open wound with bone · Unable to bear weight · Increasing swelling or numbness",
  },
];


type Service = (typeof services)[0];

function ServiceCard({ service, isActive, onClick }: { service: Service; isActive: boolean; onClick: () => void }) {
  
  return (
    <button
      onClick={onClick}
      className="group w-full text-left"
      style={{ all: "unset", display: "block", cursor: "pointer", width: "100%" }}
    >
      <div
        style={{
          background: isActive ? PRIMARY : "#fff",
          color: isActive ? "#fff" : "#1a1a1a",
          border: `1.5px solid ${isActive ? PRIMARY : "#e8eeec"}`,
          borderRadius: "16px",
          padding: "clamp(16px, 4vw, 28px) clamp(16px, 3vw, 24px)",
          transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: isActive
            ? `0 8px 32px ${PRIMARY}33`
            : "0 2px 8px rgba(0,0,0,0.04)",
          transform: isActive ? "translateY(-2px)" : "translateY(0)",
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLDivElement).style.borderColor = PRIMARY;
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = `0 6px 20px ${PRIMARY}22`;
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLDivElement).style.borderColor = "#e8eeec";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
          }
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(12px, 3vw, 16px)" }}>
          <div
            style={{
              color: isActive ? "#fff" : PRIMARY,
              flexShrink: 0,
              opacity: isActive ? 1 : 0.85,
              width: "clamp(24px, 5vw, 32px)",
              height: "clamp(24px, 5vw, 32px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {service.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "clamp(9px, 2vw, 11px)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: isActive ? "rgba(255,255,255,0.65)" : PRIMARY_MID,
                marginBottom: "6px",
              }}
            >
              SERVICE {service.code}
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(16px, 4vw, 20px)",
                fontWeight: 700,
                lineHeight: 1.3,
                color: isActive ? "#fff" : "#111",
              }}
            >
              {service.title}
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(11px, 2.5vw, 12.5px)",
                color: isActive ? "rgba(255,255,255,0.7)" : "#6b8c87",
                marginTop: "4px",
                fontStyle: "italic",
                display: "none",
              }}
            >
              {service.tagline}
            </div>
          </div>
          <div
            style={{
              color: isActive ? "rgba(255,255,255,0.6)" : "#ccc",
              fontSize: "18px",
              flexShrink: 0,
              transition: "transform 0.2s",
              transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
              display: "none",
            }}
          >
            ›
          </div>
        </div>
      </div>
    </button>
  );
}

function Tag({ children, variant = "default" }: { children: string; variant?: "default" | "primary" | "light" }) {
  const styles: Record<string, React.CSSProperties> = {
    default: {
      background: "#f3f8f7",
      color: "#2D8C7F",
      border: "1px solid #d4eae7",
    },
    primary: {
      background: PRIMARY,
      color: "#fff",
    },
    light: {
      background: PRIMARY_LIGHT,
      color: PRIMARY_DARK,
      border: `1px solid ${PRIMARY}33`,
    },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "clamp(5px, 1vw, 8px) clamp(10px, 2vw, 12px)",
        borderRadius: "100px",
        fontSize: "clamp(11px, 2vw, 12.5px)",
        fontWeight: 500,
        fontFamily: "'DM Sans', sans-serif",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "clamp(24px, 5vw, 32px)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "clamp(12px, 3vw, 16px)",
        }}
      >
        <div
          style={{
            width: "3px",
            height: "18px",
            background: PRIMARY,
            borderRadius: "2px",
          }}
        />
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(14px, 3vw, 16px)",
            fontWeight: 700,
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

export default function DrNishantServices() {
  const [activeId, setActiveId] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const active = services.find((s) => s.id === activeId)!;
  useEffect(() => {
  const handler = (e: any) => {
    setActiveId(e.detail);
  };

  window.addEventListener("selectService", handler);

  return () => window.removeEventListener("selectService", handler);
}, []);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f0f7f6; }
        ::-webkit-scrollbar-thumb { background: ${PRIMARY}66; border-radius: 3px; }
        
        .detail-panel { animation: fadeUp 0.3s ease; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        
        .service-sidebar {
          position: sticky;
          top: 88px;
          max-height: calc(100vh - 110px);
          overflow-y: auto;
          scrollbar-width: thin;
        }

        @media (max-width: 1200px) {
          .layout {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .sidebar {
            width: 100% !important;
            max-width: 100% !important;
            position: static !important;
          }
          .service-sidebar {
            position: relative;
            top: auto;
            max-height: none;
          }
          .detail {
            min-width: unset !important;
            width: 100%;
          }
          .sidebar-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(10px, 3vw, 15px);
          }
        }

        @media (max-width: 768px) {
          .sidebar-grid {
            grid-template-columns: 1fr;
          }
          .hero-section {
            padding: clamp(30px, 6vw, 50px) clamp(16px, 4vw, 30px) clamp(20px, 5vw, 30px) !important;
          }
          .main-layout {
            padding: 0 clamp(16px, 4vw, 30px) clamp(30px, 6vw, 60px) !important;
          }
          .content-section {
            padding: clamp(24px, 5vw, 40px) !important;
          }
          .treatment-grid {
            grid-template-columns: 1fr !important;
          }
          .why-choose-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .hero-card {
            padding: clamp(20px, 5vw, 30px) !important;
          }
          .section-grid {
            gap: clamp(6px, 2vw, 10px) !important;
          }
          .tag {
            font-size: 10px !important;
          }
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #f0faf8 0%, #fafffe 40%, #f5faf9 100%)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Hero */}
        <div
          className="hero-section"
          style={{
            margin: "0 auto",
            padding: "clamp(40px, 8vw, 260px) clamp(16px, 5vw, 40px) clamp(20px, 5vw, 40px)",
          }}
        >
          <div style={{ maxWidth: "600px" }} id="services" >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "clamp(10px, 2vw, 11px)",
                letterSpacing: "0.14em",
                color: PRIMARY_MID,
                marginBottom: "14px",
                fontWeight: 500,
              }}
            >
              CLINICAL SERVICES
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 7vw, 56px)",
                fontWeight: 900,
                color: "#0f1f1e",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "18px",
              }}
            >
              Advanced Orthopaedic
              <br />
              <span style={{ color: PRIMARY }}>Care & Surgery</span>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(14px, 2.5vw, 16px)",
                color: "#4a6b68",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: "580px",
              }}
            >
              Specialised orthopaedic services combining precision surgery, evidence-based care, and personalised rehabilitation — helping patients move freely, live fully.
            </p>
          </div>
        </div>

        {/* Main Layout */}
        <div
          className="layout main-layout"
          style={{
            margin: "0 auto",
            padding: "0 clamp(16px, 5vw, 40px) clamp(40px, 8vw, 80px)",
            display: "flex",
            gap: "clamp(20px, 4vw, 28px)",
            alignItems: "flex-start",
          }}
        >
          {/* Sidebar */}
          <div
            className="sidebar service-sidebar"
            style={{
              width: "clamp(280px, 30%, 380px)",
              flexShrink: 0,
              padding: "clamp(12px, 2vw, 15px)",
            }}
          >
            <div className="sidebar-grid" style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 2vw, 15px)" }}>
              {services.map((s) => (
                <ServiceCard
                  key={s.id}
                  service={s}
                  isActive={activeId === s.id}
                  onClick={() => {
                    setActiveId(s.id);
                    setSidebarOpen(false);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          <div
            className="detail"
            style={{ flex: 1, minWidth: 0 }}
            key={active.id}
          >
            <div className="detail-panel">
              {/* Hero Card */}
              <div
                className="hero-card"
                style={{
                  background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DARK} 100%)`,
                  borderRadius: "clamp(16px, 3vw, 20px)",
                  padding: "clamp(24px, 5vw, 40px)",
                  color: "#fff",
                  marginBottom: "clamp(16px, 4vw, 24px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-60px",
                    right: "60px",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "clamp(9px, 2vw, 11px)",
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: "12px",
                    fontWeight: 500,
                  }}
                >
                  SERVICE {active.code} OF {String(services.length).padStart(2, "0")}
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(22px, 5vw, 36px)",
                    fontWeight: 900,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    marginBottom: "8px",
                    lineHeight: 1.2,
                  }}
                >
                  {active.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(12px, 2vw, 14px)",
                    color: "rgba(255,255,255,0.65)",
                    fontStyle: "italic",
                    marginBottom: "16px",
                  }}
                >
                  {active.tagline}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(13px, 2vw, 15px)",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    maxWidth: "640px",
                  }}
                >
                  {active.overview}
                </p>
              </div>

              {/* Content Sections */}
              <div
                className="content-section"
                style={{
                  background: "#fff",
                  borderRadius: "clamp(16px, 3vw, 20px)",
                  padding: "clamp(24px, 5vw, 40px)",
                  border: "1px solid #e8f0ee",
                  boxShadow: "0 4px 24px rgba(45,140,127,0.06)",
                }}
              >
                {/* Conditions */}
                <Section title="Conditions Treated">
                  <div className="section-grid" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(6px, 2vw, 8px)" }}>
                    {active.conditions.map((c) => (
                      <Tag key={c} variant="light">{c}</Tag>
                    ))}
                  </div>
                </Section>

                {/* Symptoms */}
                <Section title="When to Be Concerned">
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 2vw, 8px)" }}>
                    {active.symptoms.map((s) => (
                      <div
                        key={s}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "clamp(10px, 2vw, 12px)",
                          padding: "clamp(8px, 2vw, 10px) clamp(10px, 2vw, 14px)",
                          background: "#f9fdfc",
                          borderRadius: "10px",
                          border: "1px solid #eaf3f1",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: PRIMARY,
                            flexShrink: 0,
                            marginTop: "6px",
                          }}
                        />
                        <span style={{ fontSize: "clamp(12px, 2vw, 14px)", color: "#374240", lineHeight: 1.5 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Treatment */}
                <Section title="Treatment Pathway">
                  <div className="treatment-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(12px, 3vw, 16px)" }}>
                    <div
                      style={{
                        background: "#f9fdfc",
                        borderRadius: "14px",
                        padding: "clamp(16px, 3vw, 20px)",
                        border: "1px solid #e0eeeb",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "clamp(9px, 2vw, 10px)",
                          letterSpacing: "0.1em",
                          color: "#7aada8",
                          marginBottom: "12px",
                          fontWeight: 500,
                        }}
                      >
                        CONSERVATIVE
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                        {active.treatment.early.map((t) => (
                          <div key={t} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a8d4cf", flexShrink: 0 }} />
                            <span style={{ fontSize: "clamp(12px, 2vw, 13px)", color: "#4a6b68" }}>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${PRIMARY_LIGHT} 0%, #d4eeeb 100%)`,
                        borderRadius: "14px",
                        padding: "clamp(16px, 3vw, 20px)",
                        border: `1px solid ${PRIMARY}33`,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "clamp(9px, 2vw, 10px)",
                          letterSpacing: "0.1em",
                          color: PRIMARY,
                          marginBottom: "12px",
                          fontWeight: 500,
                        }}
                      >
                        SURGICAL
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                        {active.treatment.advanced.map((t) => (
                          <div key={t} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: PRIMARY, flexShrink: 0 }} />
                            <span style={{ fontSize: "clamp(12px, 2vw, 13px)", color: PRIMARY_DARK, fontWeight: 500 }}>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Recovery */}
                <Section title="Recovery Timeline">
                  <div
                    style={{
                      background: "linear-gradient(90deg, #f0faf8, #fafffe)",
                      borderRadius: "12px",
                      padding: "clamp(14px, 3vw, 18px) clamp(16px, 3vw, 20px)",
                      border: `1px solid ${PRIMARY}22`,
                      borderLeft: `4px solid ${PRIMARY}`,
                    }}
                  >
                    <p style={{ fontSize: "clamp(12px, 2vw, 14px)", color: "#374240", lineHeight: 1.7 }}>
                      {active.recovery}
                    </p>
                  </div>
                </Section>

                {/* Why Choose */}
                <Section title="Why Choose Dr. Verma">
                  <div className="why-choose-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(8px, 2vw, 10px)" }}>
                    {active.whyChoose.map((w) => (
                      <div
                        key={w}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "clamp(8px, 2vw, 10px)",
                          padding: "clamp(10px, 2vw, 12px) clamp(10px, 2vw, 14px)",
                          background: "#fff",
                          borderRadius: "10px",
                          border: "1px solid #e8f0ee",
                        }}
                      >
                        <div
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            background: PRIMARY,
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "1px",
                          }}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span style={{ fontSize: "clamp(12px, 2vw, 13px)", color: "#374240", lineHeight: 1.5 }}>{w}</span>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* When to Consult */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DARK} 100%)`,
                    borderRadius: "14px",
                    padding: "clamp(16px, 4vw, 24px)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "clamp(16px, 3vw, 20px)",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "clamp(9px, 2vw, 10px)",
                        letterSpacing: "0.12em",
                        color: "rgba(255,255,255,0.55)",
                        marginBottom: "6px",
                        fontWeight: 500,
                      }}
                    >
                      CONSULT IF YOU HAVE
                    </div>
                    <p style={{ fontSize: "clamp(12px, 2vw, 14px)", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
                      {active.consult}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}