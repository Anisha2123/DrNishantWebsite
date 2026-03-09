/**
 * KneeReplacementGuide.jsx
 * Sticky bar with hierarchical animated modals
 * Professional medical content organization with image placeholders
 */
import { useState } from "react";
import { FaChevronRight, FaTimes, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

type ModalItem = {
  id: string;
  name: string;
  preview: string;
  key: string;
};

type ModalContentBase = {
  title: string;
  parent?: string;
  description?: string;
  image?: string;
  content?: string;
  icon?: string;
  subtitle?: string;
  sections?: { label: string; key: string }[];
  items?: ModalItem[];
};

type ModalContent = {
  [key: string]: ModalContentBase;
};

export default function KneeReplacementGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [history, setHistory] = useState<(string | null)[]>([]);

  const openModal = (key: string) => {
    setHistory([...history, activeModal]);
    setActiveModal(key);
  };

  const closeModal = () => {
    if (history.length > 0) {
      setActiveModal(history[history.length - 1]);
      setHistory(history.slice(0, -1));
    } else {
      setActiveModal(null);
    }
  };

  const resetModals = () => {
    setActiveModal(null);
    setHistory([]);
    setIsOpen(false);
  };

  const modalContent: ModalContent = {
    main: {
      title: "All About Knee Replacement",
      subtitle: "Complete Guide to Your Surgery",
      description: "Explore comprehensive information about knee replacement surgery types, implant choices, and what to expect.",
      icon: "🦵",
      sections: [
        { label: "Surgery Types", key: "surgeryTypes" },
        { label: "Implant Brands", key: "implantBrands" },
        { label: "How to Choose", key: "chooseImplant" },
        { label: "Before & After", key: "beforeAfter" },
      ],
    },
    surgeryTypes: {
      title: "Types of Knee Replacement Surgery",
      parent: "main",
      description: "Six different surgical approaches tailored to your condition",
      items: [
        {
          id: "total",
          name: "Total Knee Replacement",
          preview: "Most common surgery in India",
          key: "totalKnee",
        },
        {
          id: "partial",
          name: "Partial Knee Replacement",
          preview: "One compartment only",
          key: "partialKnee",
        },
        {
          id: "revision",
          name: "Revision Knee Replacement",
          preview: "Worn implant replacement",
          key: "revisionKnee",
        },
        {
          id: "bilateral",
          name: "Bilateral Knee Replacement",
          preview: "Both knees simultaneously",
          key: "bilateralKnee",
        },
        {
          id: "patellofemoral",
          name: "Patellofemoral Replacement",
          preview: "Kneecap and thighbone only",
          key: "patellofemoralKnee",
        },
      ],
    },
    implantBrands: {
      title: "Internationally Trusted Implant Brands",
      parent: "main",
      description: "Premium knee implant systems used by Dr. Nishant Verma",
      items: [
        {
          id: "zimmer",
          name: "Zimmer Biomet (USA)",
          preview: "Persona & NexGen systems",
          key: "zimmerDetail",
        },
        {
          id: "maxx",
          name: "Maxx Orthopedics (USA)",
          preview: "Freedom® Knee System",
          key: "maxxDetail",
        },
        {
          id: "depuy",
          name: "DePuy Synthes (Johnson & Johnson)",
          preview: "Attune® Knee System",
          key: "depuyDetail",
        },
        {
          id: "microport",
          name: "MicroPort Orthopedics",
          preview: "Evolution® Knee System",
          key: "microportDetail",
        },
        {
          id: "stryker",
          name: "StryKer",
          preview: "Triathlon Knee System",
          key: "strykerDetail",
        },
      ],
    },
    chooseImplant: {
      title: "How Dr. Nishant Chooses Your Implant",
      parent: "main",
      description: "Personalized implant selection based on your unique factors",
      items: [
        {
          id: "age",
          name: "Age & Activity Level",
          preview: "Different needs for different ages",
          key: "ageDetail",
        },
        {
          id: "severity",
          name: "Severity of Knee Damage",
          preview: "Assessment of arthritis level",
          key: "severityDetail",
        },
        {
          id: "bone",
          name: "Bone Quality & Alignment",
          preview: "Structural assessment",
          key: "boneDetail",
        },
        {
          id: "lifestyle",
          name: "Lifestyle & Daily Activity",
          preview: "Activity-specific implants",
          key: "lifestyleDetail",
        },
        {
          id: "material",
          name: "Implant Material & Technology",
          preview: "Advanced materials & design",
          key: "materialDetail",
        },
      ],
    },
    beforeAfter: {
      title: "Before & After Surgery",
      parent: "main",
      description: "What to expect before, during, and after your procedure",
      items: [
        {
          id: "before",
          name: "Before Surgery",
          preview: "Preparation & evaluation",
          key: "beforeDetail",
        },
        {
          id: "procedure",
          name: "The Procedure",
          preview: "Surgical steps explained",
          key: "procedureDetail",
        },
        {
          id: "recovery",
          name: "Recovery & Rehabilitation",
          preview: "Post-surgery care plan",
          key: "recoveryDetail",
        },
        {
          id: "complications",
          name: "Possible Complications",
          preview: "What to watch for",
          key: "complicationsDetail",
        },
      ],
    },
    // Detailed views
    totalKnee: {
      title: "Total Knee Replacement Surgery",
      parent: "surgeryTypes",
      image: "https://images.unsplash.com/photo-1579154204601-01d82f3b80c8?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Most Common Knee Surgery</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">Total knee replacement surgery is the most common orthopedic procedure in India. The surgeon replaces the damaged knee joint with artificial implants made of metal and plastic.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Procedure Steps</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F; font-weight: bold;">1.</span>
            <strong>Prepare the skeleton</strong> - Remove damaged cartilage and bone from femur and tibia
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F; font-weight: bold;">2.</span>
            <strong>Arrange metal implants</strong> - Metal components are cemented or press-fitted
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F; font-weight: bold;">3.</span>
            <strong>Recondition kneecap</strong> - Cover undersurface with plastic button
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F; font-weight: bold;">4.</span>
            <strong>Place separator</strong> - Medical-grade plastic creates smooth sliding surface
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Success Rate</h4>
        <p>Less than 2% of patients experience complications. High success rate with long-lasting results.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Hospital Stay</h4>
        <p>3-5 days for observation and initial recovery. Full recovery: 3-6 months.</p>
      `,
    },
    partialKnee: {
      title: "Partial Knee Replacement",
      parent: "surgeryTypes",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Single Compartment Surgery</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">When only one compartment of your knee is damaged, the surgeon replaces only that part. Your healthy compartments remain unchanged.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Who Needs This Surgery?</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Osteoarthritis in one compartment only
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Pain on inside or outside of knee
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Other compartments remain healthy
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Benefits</h4>
        <p>Faster healing than total knee replacement. Easier to get back on your feet. Less pain and swelling post-operation.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Recovery Time</h4>
        <p>Shorter recovery period. Most patients return to activities quicker than total replacement.</p>
      `,
    },
    revisionKnee: {
      title: "Revision Knee Replacement",
      parent: "surgeryTypes",
      image: "https://images.unsplash.com/photo-1631217314830-4d4b2f32c147?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">When Implants Need Replacement</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">Like any implant, knee replacements can wear out or develop problems after 15-20+ years. Revision surgery replaces the worn components.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Two Types of Revision</h4>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">1. Single-Stage Revision</h5>
          <p style="margin: 0;">Old implant removed and new one inserted in same operation. No infection present.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">2. Two-Stage Revision</h5>
          <p style="margin: 0;">Used for joint infections. Stage 1: Remove implant & insert spacer. Stage 2: Insert new implant after infection clears.</p>
        </div>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">When Surgery is Needed</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            Implant loosening or wear
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            Joint infection
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            Knee instability
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            Severe stiffness
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Recovery</h4>
        <p>4-7 days hospital rest. Recovery takes longer than initial surgery. Complete recovery: 3-6 months with physiotherapy.</p>
      `,
    },
    bilateralKnee: {
      title: "Bilateral Knee Replacement",
      parent: "surgeryTypes",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Replacing Both Knees</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">When both knees are severely damaged, Dr. Nishant Verma may perform bilateral replacement. This can be done simultaneously or in separate surgeries weeks/months apart.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Who Needs This Surgery?</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">1</span>
            <strong>Severe pain in both knees</strong> affecting daily life
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">2</span>
            <strong>Difficulty walking, climbing stairs, or standing</strong>
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">3</span>
            <strong>Other treatments failed</strong> (medication, PT, injections)
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">4</span>
            <strong>X-rays show severe joint damage</strong> in both knees
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Important Considerations</h4>
        <p>Only one knee can heal at a time, so longer hospital stay is needed. Having family support during recovery is recommended. This is a significant decision made with your surgeon.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Recovery Timeline</h4>
        <p><strong>Hospital Stay:</strong> 3-7 days | <strong>Pain Management & PT:</strong> First week | <strong>Exercises:</strong> 4-6 weeks | <strong>Full Recovery:</strong> 3-6 months</p>
      `,
    },
    patellofemoralKnee: {
      title: "Patellofemoral Replacement",
      parent: "surgeryTypes",
      image: "https://images.unsplash.com/photo-1631217314830-4d4b2f32c147?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Kneecap & Thighbone Only</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">This specialized surgery targets only the joint where the kneecap meets the thighbone, leaving the rest of your knee unchanged.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Implant Components</h4>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Trochlear Component</h5>
          <p style="margin: 0;">Metal alloy (cobalt-chromium) fixed to femur. Recreates groove for smooth patellar movement.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Patellar Component</h5>
          <p style="margin: 0;">Polyethylene (plastic) attached to kneecap. Allows smooth gliding over groove.</p>
        </div>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Symptoms That Indicate This Surgery</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Pain in front of knee
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Pain when sitting or squatting
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Pain climbing stairs
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Swelling around kneecap
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Success & Recovery</h4>
        <p><strong>Success Rate:</strong> 80-90% | <strong>Implant Lifespan:</strong> 10-15+ years</p>
        <p style="margin-top: 1rem;"><strong>Recovery Timeline:</strong> Can walk in 24-48 hours | Return to activities in 2-6 weeks | Full recovery in 3-6 months</p>
      `,
    },
    zimmerDetail: {
      title: "Zimmer Biomet (USA)",
      parent: "implantBrands",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Global Leader in Joint Solutions</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">Zimmer Biomet provides proven solutions for joint problems. Their implants help patients move better and live pain-free lives.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Featured Systems</h4>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Persona® Knee System</h5>
          <p style="margin: 0;">Advanced design for natural knee movement. Allows patients to walk, climb stairs, and sit with minimal pain.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">NexGen® Knee System</h5>
          <p style="margin: 0;">Proven long-term performance. Trusted by surgeons and patients worldwide.</p>
        </div>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Why Dr. Nishant Verma Uses Zimmer Biomet</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Worldwide reputation for excellence
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Long-lasting implants
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Natural knee movement
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Proven clinical results
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Used in leading hospitals worldwide
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Patient Outcome</h4>
        <p>Patients report excellent long-term satisfaction with pain relief and restored function. Many resume normal activities including sports and hobbies.</p>
      `,
    },
    maxxDetail: {
      title: "Maxx Orthopedics - Freedom® Knee System",
      parent: "implantBrands",
      image: "https://images.unsplash.com/photo-1579154204601-01d82f3b80c8?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">High-Flexion Movement Design</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">The Freedom® Knee System is engineered for patients who want to stay active. It mimics natural knee movement for improved function.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Key Features</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>High-Flexion Movement</strong> - For active patients who want full range of motion
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Range of Motion & Stability</strong> - Balanced design for daily activities
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Natural Movement Pattern</strong> - Mimics real knee biomechanics
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Cost-Effective</strong> - Quality technology at reasonable price
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">What You Can Do</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Walk without difficulty
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Climb stairs easily
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Sit down comfortably
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Remain active
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Durability & Reliability</h4>
        <p>This knee system is built to last with excellent durability and clinical results. You're getting quality and advanced technology without excessive cost.</p>
      `,
    },
    depuyDetail: {
      title: "DePuy Synthes - Attune® Knee System",
      parent: "implantBrands",
      image: "https://images.unsplash.com/photo-1579154204601-01d82f3b80c8?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Johnson & Johnson Innovation</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">DePuy Synthes, backed by Johnson & Johnson, combines research expertise with advanced engineering to create the Attune® Knee System.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">About Attune® Knee System</h4>
        <p style="margin-bottom: 1rem;">This isn't just another knee implant. It's designed with extensive clinical research to help patients:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Move more smoothly and naturally
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Feel more stable and confident
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Return to normal activities quickly
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Enjoy long-term durability
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Why Surgeons Trust Attune®</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Mimics natural knee movement
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Strong track record
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Reliable results
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Patients have high satisfaction
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Patient Outcomes</h4>
        <p>Patients using Attune® report excellent pain relief, improved stability, and return to desired activities. It's become a go-to option for quality knee replacement.</p>
      `,
    },
    microportDetail: {
      title: "MicroPort Orthopedics - Evolution® Knee System",
      parent: "implantBrands",
      image: "https://images.unsplash.com/photo-1631217314830-4d4b2f32c147?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Cutting-Edge Asian Innovation</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">MicroPort is renowned for joint replacement excellence with continuous investment in research and technology, especially in Asian healthcare markets.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Evolution® Knee System Highlights</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Natural Movement</strong> - Design mimics real knee biomechanics
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Strong & Sturdy</strong> - Feels stable after surgery
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Easy Mobility</strong> - Get back on your feet quickly
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Long-Lasting</strong> - Solid durability record
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Research & Development</h4>
        <p>MicroPort continuously invests in research and new technologies. This commitment to innovation has driven rapid growth, especially in Asian healthcare markets, making them a trusted choice for modern orthopedic surgery.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Why Dr. Nishant Verma Chooses Evolution®</h4>
        <p>The Evolution® Knee System provides patients with solid, long-lasting results through cutting-edge design and proven performance. Dr. Nishant Verma uses this system to ensure his patients at Sarvodaya Hospital in Hisar receive the best possible outcomes.</p>
      `,
    },
    strykerDetail: {
      title: "StryKer - Triathlon Knee System",
      parent: "implantBrands",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">High-Performance Medical Technology</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">Stryker stands out as a top medical technology company with leadership in joint replacement and robotic-assisted orthopedic surgery.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Triathlon Knee System Features</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>Works Like a Real Knee</strong> - Mimics natural biomechanics
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>Very Stable</strong> - Provides confidence in daily activities
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>Proven Long-Term Results</strong> - Patients trust it
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>High Patient Satisfaction</strong> - Patients report excellent outcomes
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">What Patients Can Do</h4>
        <p>After recovery, patients using the Triathlon Knee System can:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            Return to normal daily activities
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            Move around with confidence
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            Enjoy an improved quality of life
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            Maintain long-term joint health
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Dr. Nishant Verma's Choice</h4>
        <p>Dr. Nishant Verma uses the Triathlon Knee System at Sarvodaya Hospital in Hisar because it gives his patients results they can depend on for many years to come.</p>
      `,
    },
    ageDetail: {
      title: "Age & Activity Level",
      parent: "chooseImplant",
      image: "https://images.unsplash.com/photo-1579154204601-01d82f3b80c8?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Different Needs at Different Ages</h3>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Younger, Active Patients</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Need implants that handle extensive movement
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Require high strength and durability
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Benefit from high-flexion designs
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            May need sports-specific options
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Older Patients</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Need comfortable, stable implants
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Focus on daily living activities
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Benefit from proven, standard designs
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            May have other health considerations
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Dr. Nishant's Approach</h4>
        <p>Dr. Nishant Verma carefully evaluates each patient's age, lifestyle, and goals to select the most appropriate implant. A 35-year-old marathon runner has very different needs than a 75-year-old who wants to walk comfortably. The right choice ensures optimal outcomes for many years.</p>
      `,
    },
    severityDetail: {
      title: "Severity of Knee Damage",
      parent: "chooseImplant",
      image: "https://images.unsplash.com/photo-1631217314830-4d4b2f32c147?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Assessment of Knee Condition</h3>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Factors Dr. Nishant Evaluates</h4>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Cartilage Loss</h5>
          <p style="margin: 0;">The knee joint is covered with cartilage. When this cartilage is damaged or completely lost, it affects treatment options.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Joint Deformity</h5>
          <p style="margin: 0;">When joints become deformed or misaligned due to arthritis, it determines the complexity of surgery needed.</p>
        </div>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Treatment Options Based on Severity</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">1</span>
            <strong>Mild Damage:</strong> Partial replacement may be sufficient
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">2</span>
            <strong>Moderate Damage:</strong> Total replacement recommended
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">3</span>
            <strong>Severe Damage:</strong> Specialized implant systems may be needed
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">4</span>
            <strong>Very Complex Cases:</strong> Custom or revision approaches
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Why This Matters</h4>
        <p>The severity of your knee damage directly determines which implant and surgical approach will work best. Dr. Nishant uses imaging and clinical assessment to make this determination and choose the most effective solution for your specific situation.</p>
      `,
    },
    boneDetail: {
      title: "Bone Quality & Alignment",
      parent: "chooseImplant",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Structural Assessment</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">The strength and alignment of your bones are critical for successful knee implant placement and long-term durability.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">What Dr. Nishant Checks</h4>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Bone Strength</h5>
          <p style="margin: 0;">Strong bones are needed to support the implant. Conditions like osteoporosis may require special considerations.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Knee Alignment</h5>
          <p style="margin: 0;">Whether your knee bows inward or outward affects which implant will work best and how it should be positioned.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Ligament Condition</h5>
          <p style="margin: 0;">Damaged or intact ligaments determine stability and implant selection.</p>
        </div>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Implant Selection Impact</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Good bone quality allows standard cemented implants
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Poor bone quality may require special fixation methods
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Severe misalignment requires specialized implants
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Ligament damage affects stability options
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Why It Matters</h4>
        <p>Choosing an implant that matches your bone quality and alignment ensures the surgery will be successful and the implant will last as long as possible. Dr. Nishant's thorough assessment guarantees the right choice for your unique anatomy.</p>
      `,
    },
    lifestyleDetail: {
      title: "Lifestyle & Daily Activity",
      parent: "chooseImplant",
      image: "https://images.unsplash.com/photo-1579154204601-01d82f3b80c8?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Activity-Specific Implant Choices</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">Your daily activities and lifestyle determine which implant design will serve you best long-term.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Patients Who Benefit from High-Flexion Implants</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Sit cross-legged frequently</strong> (cultural or personal preference)
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Climb stairs regularly</strong> (home or work setting)
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Participate in sports or fitness</strong> (golf, hiking, yoga)
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Maintain active lifestyle</strong> (don't want limitations)
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            <strong>Squat or deep knee bending</strong> regularly
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Standard Implants for Typical Activities</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Walking on level surfaces
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Light gardening or housework
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Sitting and standing
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Light travel and outings
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Dr. Nishant's Recommendation Process</h4>
        <p>During your consultation, Dr. Nishant will ask about your lifestyle, hobbies, and what activities are most important to you. This information helps him select an implant that will support your desired lifestyle while ensuring long-term success.</p>
      `,
    },
    materialDetail: {
      title: "Implant Material & Technology",
      parent: "chooseImplant",
      image: "https://images.unsplash.com/photo-1631217314830-4d4b2f32c147?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Advanced Materials & Engineering</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">Modern knee implants use cutting-edge materials and manufacturing techniques based on worldwide research and proven outcomes.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Implant Materials</h4>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Metal Components</h5>
          <p style="margin: 0;">Typically titanium or cobalt-chromium alloys. These provide strength and durability to support your body weight and movement.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Plastic Components</h5>
          <p style="margin: 0;">Medical-grade polyethylene creates a smooth, durable surface. Advanced polyethylene resists wear and extends implant life.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Surface Coatings</h5>
          <p style="margin: 0;">Special coatings help implants integrate with your bone and resist loosening over time.</p>
        </div>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Technology Advances</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>3D Design</strong> - Computer modeling for optimal fit
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>Precision Manufacturing</strong> - Exact tolerances for better results
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>Advanced Materials</strong> - Improved wear resistance
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>Biomimetic Design</strong> - Imitates natural knee movement
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Why It Matters</h4>
        <p>The materials and technology in your implant directly affect how long it lasts, how well it feels, and how naturally it moves. Dr. Nishant chooses implants from manufacturers who invest heavily in research and use the latest technology to ensure the best possible outcomes for his patients.</p>
      `,
    },
    beforeDetail: {
      title: "Before Surgery - Preparation",
      parent: "beforeAfter",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Getting Ready for Success</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">Thorough preparation before surgery helps ensure the best outcomes and prevents complications.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Step 1: Medical Evaluation</h4>
        <p>Your primary doctor performs a complete physical examination to ensure you're fit for surgery. Dr. Nishant Verma reviews all findings before proceeding.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Step 2: Laboratory Tests</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Blood tests
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Diabetes screening
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Urine sample
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Step 3: Medication Review</h4>
        <p>If taking medications for other conditions, Dr. Nishant assesses their impact on surgery. Some medications may need to be adjusted or stopped before surgery.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Step 4: Dental Evaluation</h4>
        <p>Although rare, infections can occur after surgery. To minimize risk, dental work like tooth extraction or periodontal treatment is completed before surgery. Antibiotics may be prescribed if any problems are found.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Step 5: Urinary Evaluation</h4>
        <p>Special attention if you have a history of urinary infections. Testing helps prevent infection-related complications after surgery.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">What You Can Do to Prepare</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Attend all pre-surgery appointments
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Complete all tests and evaluations
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Follow all pre-surgery instructions
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Stop eating/drinking as instructed
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Get adequate rest the night before
          </li>
        </ul>
      `,
    },
    procedureDetail: {
      title: "The Surgical Procedure",
      parent: "beforeAfter",
      image: "https://images.unsplash.com/photo-1579154204601-01d82f3b80c8?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">What Happens During Surgery</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">Modern knee replacement surgery is well-established and uses proven techniques to ensure excellent outcomes.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Anesthesia</h4>
        <p>You'll receive anesthesia to keep you comfortable and pain-free throughout the procedure. An anesthesiologist monitors your vitals continuously.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">The Four Basic Steps (for Total Knee Replacement)</h4>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">1. Prepare the Skeleton</h5>
          <p style="margin: 0;">Dr. Nishant carefully removes the damaged cartilage and a small amount of bone from the femur (thighbone) and tibia (shinbone).</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">2. Arrange Metal Implants</h5>
          <p style="margin: 0;">Metal components replace the removed bone and cartilage. These are either cemented into place or press-fitted, depending on bone quality.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">3. Recondition the Kneecap</h5>
          <p style="margin: 0;">The undersurface of the kneecap (patella) is resurfaced and covered with a plastic button, or left unreplaced based on the specific case.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">4. Place a Separator</h5>
          <p style="margin: 0;">A medical-grade plastic spacer is placed between the metal components to create a smooth, gliding surface for natural movement.</p>
        </div>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Surgery Duration</h4>
        <p>Total knee replacement typically takes 1-2 hours, depending on complexity. Dr. Nishant's precision and experience help ensure excellent alignment and fit.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Closure & Recovery Room</h4>
        <p>The incision is carefully closed, and you're moved to recovery where you'll wake up and be monitored as anesthesia wears off. Hospital staff will begin initial pain management and movement exercises.</p>
      `,
    },
    recoveryDetail: {
      title: "Recovery & Rehabilitation",
      parent: "beforeAfter",
      image: "https://images.unsplash.com/photo-1631217314830-4d4b2f32c147?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Your Path Back to Normal</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">Recovery is a gradual process with specific milestones. Physical therapy is crucial for optimal results.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Hospital Stay</h4>
        <p>Most patients stay 3-5 days for observation and initial recovery. During this time, nurses monitor your wound, manage pain, and begin basic movement exercises.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">First 2 Weeks at Home</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Rest with leg elevation to reduce swelling
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Use ice packs as directed
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Take pain medication as prescribed
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Begin gentle range-of-motion exercises
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">→</span>
            Use assistive devices (walker, crutches) as needed
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Weight-Bearing Progress</h4>
        <p>You'll gradually increase pressure on your knee under therapist guidance. Initially you may use a walker or cane. As strength improves, you'll need less support.</p>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Physical Therapy</h4>
        <p>A physical therapist will guide you through exercises to:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Maintain joint flexibility
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Restore muscle strength
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Improve balance and coordination
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            Return to normal activities
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Recovery Timeline</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            <strong>2-6 weeks:</strong> Can perform daily activities with support
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            <strong>3 months:</strong> Most pain resolved, improved mobility
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            <strong>6 months:</strong> Significant functional improvement
          </li>
          <li style="margin-bottom: 0.6rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">•</span>
            <strong>12 months:</strong> Full recovery and adaptation
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Follow-Up Visits</h4>
        <p>Regular visits with Dr. Nishant Verma are essential. He'll monitor your progress, check your incision, and adjust your therapy plan as needed.</p>
      `,
    },
    complicationsDetail: {
      title: "Possible Complications",
      parent: "beforeAfter",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop&q=80",
      content: `
        <h3 style="color: #2D8C7F; margin-bottom: 1rem; font-size: 1.2rem;">Understanding Risks</h3>
        <p style="line-height: 1.8; margin-bottom: 1rem;">While complications are rare (less than 2%), it's important to be aware of what to watch for after surgery.</p>
        
        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Possible Complications</h4>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Infection</h5>
          <p style="margin: 0;">Can occur in the wound or deep around the prosthesis. Antibiotics may be needed, or in rare cases, additional surgery.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Blood Clots</h5>
          <p style="margin: 0;">Can form in leg veins after surgery. Prevention measures include early movement, compression stockings, and medications.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Implant Problems</h5>
          <p style="margin: 0;">Wear or loosening can occur over time, but modern implants are designed for longevity (15-20+ years).</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Persistent Pain</h5>
          <p style="margin: 0;">Some patients experience ongoing pain. Physical therapy and medication adjustment usually help.</p>
        </div>
        <div style="background: #f7f9f8; padding: 1rem; border-radius: 8px;">
          <h5 style="color: #2D8C7F; margin-bottom: 0.5rem;">Nerve or Blood Vessel Damage</h5>
          <p style="margin: 0;">Rare, but Dr. Nishant uses precise surgical techniques to minimize this risk.</p>
        </div>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">Post-Surgery Precautions</h4>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>Prevent Blood Clots:</strong> Follow your surgeon's instructions about movement and possibly blood-thinning medication
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>Prevent Infection:</strong> Keep your incision clean and dry. Watch for signs of infection (increased pain, redness, drainage)
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>Avoid Falls:</strong> Your new knee can be damaged by falls, especially in the first weeks. Use assistive devices and move carefully
          </li>
          <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">✓</span>
            <strong>Attend Follow-Ups:</strong> Regular appointments ensure any problems are caught early
          </li>
        </ul>

        <h4 style="color: #1f6860; margin: 1.5rem 0 0.5rem;">When to Call Dr. Nishant</h4>
        <p style="margin-bottom: 0.8rem;">Contact us immediately if you experience:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">🚨</span>
            Sudden increase in pain
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">🚨</span>
            Signs of infection (fever, redness, drainage)
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">🚨</span>
            Severe swelling
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">🚨</span>
            Knee giving way or instability
          </li>
          <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
            <span style="position: absolute; left: 0; color: #2D8C7F;">🚨</span>
            Chest pain or shortness of breath
          </li>
        </ul>
      `,
    },
  };

  const renderContent = (content: string | undefined) => {
    if (typeof content === "string") {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return content;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --primary: #2D8C7F;
          --primary-light: #3aa899;
          --primary-dark: #1f6860;
          --primary-muted: rgba(45,140,127,0.07);
          --primary-border: rgba(45,140,127,0.2);
          --ink: #0f1e1c;
          --ink-soft: #4a5e5b;
          --cream: #f7f9f8;
          --white: #ffffff;
        }

        /* ─── STICKY BAR ─── */
        .krg-sticky-bar {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 40;
        }

        .krg-trigger-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 22px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(45, 140, 127, 0.3);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          letter-spacing: 0.02em;
        }

        .krg-trigger-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(45, 140, 127, 0.4);
        }

        .krg-trigger-btn:active {
          transform: translateY(-2px);
        }

        /* ─── MODAL BACKDROP ─── */
        .krg-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 45;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s, visibility 0.4s;
        }

        .krg-modal-backdrop.active {
          opacity: 1;
          visibility: visible;
        }

        /* ─── MODAL CONTAINER ─── */
        .krg-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          z-index: 50;
          max-width: 90vw;
          width: 100%;
          max-height: 90vh;
          border-radius: 16px;
          background: var(--white);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
        }

        .krg-modal.active {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
          pointer-events: auto;
          animation: modalSlideIn 0.5s ease-out;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.85);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        /* ─── MODAL CONTENT ─── */
        .krg-modal-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }

        .krg-modal-header {
          padding: 2rem;
          border-bottom: 1px solid var(--primary-border);
          background: linear-gradient(135deg, var(--primary-muted) 0%, rgba(45,140,127,0.03) 100%);
        }

        .krg-modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .krg-modal-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: var(--primary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .krg-modal-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 1px solid var(--primary-border);
        }

        .krg-modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 2rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--ink-soft);
        }

        .krg-modal-body::-webkit-scrollbar {
          width: 8px;
        }

        .krg-modal-body::-webkit-scrollbar-track {
          background: var(--cream);
        }

        .krg-modal-body::-webkit-scrollbar-thumb {
          background: var(--primary-border);
          border-radius: 4px;
        }

        .krg-modal-body::-webkit-scrollbar-thumb:hover {
          background: var(--primary);
        }

        .krg-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }

        .krg-item-card {
          padding: 1.25rem;
          border: 1px solid var(--primary-border);
          border-radius: 8px;
          background: var(--white);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .krg-item-card:hover {
          border-color: var(--primary);
          background: var(--primary-muted);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(45, 140, 127, 0.15);
        }

        .krg-item-name {
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .krg-item-preview {
          font-size: 0.85rem;
          color: var(--ink-soft);
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .krg-item-arrow {
          width: 16px;
          height: 16px;
          color: var(--primary);
          transition: transform 0.3s ease;
        }

        .krg-item-card:hover .krg-item-arrow {
          transform: translateX(4px);
        }

        /* ─── MODAL FOOTER ─── */
        .krg-modal-footer {
          padding: 1.5rem 2rem;
          border-top: 1px solid var(--primary-border);
          display: flex;
          gap: 1rem;
          justify-content: flex-start;
          align-items: center;
          background: var(--cream);
        }

        .krg-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          min-height: 44px;
        }

        .krg-btn-back {
          background: var(--primary-muted);
          color: var(--primary);
          border: 1px solid var(--primary-border);
        }

        .krg-btn-back:hover {
          background: var(--primary);
          color: white;
          transform: translateX(-2px);
        }

        .krg-btn-close {
          background: transparent;
          color: var(--primary);
          border: 1px solid var(--primary-border);
          margin-left: auto;
        }

        .krg-btn-close:hover {
          background: var(--primary-muted);
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 768px) {
          .krg-sticky-bar {
            bottom: 1rem;
            right: 1rem;
          }

          .krg-trigger-btn {
            padding: 12px 16px;
            font-size: 0.8rem;
          }

          .krg-modal {
            max-width: 95vw;
            max-height: 85vh;
          }

          .krg-modal-header {
            padding: 1.5rem;
          }

          .krg-modal-title {
            font-size: 1.5rem;
          }

          .krg-modal-body {
            padding: 1.5rem;
          }

          .krg-modal-footer {
            padding: 1rem 1.5rem;
            flex-wrap: wrap;
          }

          .krg-items-grid {
            grid-template-columns: 1fr;
          }

          .krg-btn-close {
            margin-left: 0;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .krg-trigger-btn {
            padding: 10px 12px;
            font-size: 0.75rem;
            gap: 6px;
          }

          .krg-modal-title {
            font-size: 1.25rem;
          }

          .krg-modal-body {
            padding: 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Sticky Bar Trigger */}
      <div className="krg-sticky-bar">
        <button
          className="krg-trigger-btn"
          onClick={() => {
            setIsOpen(!isOpen);
            setActiveModal(!isOpen ? "main" : null);
            setHistory([]);
          }}
        >
          {!isOpen ? "📘 Knee Replacement" : "✕"}
        </button>
      </div>

      {/* Modal Backdrop */}
      <div
        className={`krg-modal-backdrop${isOpen ? " active" : ""}`}
        onClick={resetModals}
      />

      {/* Modal */}
      <div className={`krg-modal${activeModal ? " active" : ""}`}>
        <div className="krg-modal-content">
          {activeModal && modalContent[activeModal] && (
            <>
              <div className="krg-modal-header">
                <div className="krg-modal-subtitle">
                  {modalContent[activeModal].parent === "main" ? "Guide" : "Details"}
                </div>
                <h2 className="krg-modal-title">
                  {modalContent[activeModal].title}
                </h2>
              </div>

              {modalContent[activeModal].image && (
                <img
                  src={modalContent[activeModal].image}
                  alt={modalContent[activeModal].title}
                  className="krg-modal-image"
                />
              )}

              <div className="krg-modal-body">
                {modalContent[activeModal].description && (
                  <p style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>
                    {modalContent[activeModal].description}
                  </p>
                )}

                {modalContent[activeModal].sections ? (
                  <div className="krg-items-grid">
                    {modalContent[activeModal].sections!.map((section) => (
                      <div
                        key={section.key}
                        className="krg-item-card"
                        onClick={() => openModal(section.key)}
                      >
                        <div className="krg-item-name">
                          {section.label}
                          <FaChevronRight className="krg-item-arrow" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : modalContent[activeModal].items ? (
                  <div className="krg-items-grid">
                    {modalContent[activeModal].items!.map((item) => (
                      <div
                        key={item.id}
                        className="krg-item-card"
                        onClick={() => openModal(item.key)}
                      >
                        <div className="krg-item-name">
                          {item.name}
                          <FaChevronRight className="krg-item-arrow" />
                        </div>
                        <p className="krg-item-preview">{item.preview}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  renderContent(modalContent[activeModal].content)
                )}
              </div>

              <div className="krg-modal-footer">
                {history.length > 0 && (
                  <button className="krg-btn krg-btn-back" onClick={closeModal}>
                    <FaArrowLeft /> Back
                  </button>
                )}
                <button className="krg-btn krg-btn-close" onClick={resetModals}>
                  <FaTimes /> Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}