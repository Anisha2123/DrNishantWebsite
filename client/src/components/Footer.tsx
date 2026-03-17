/**
 * Footer.jsx — Professional medical practice footer with dark theme
 * 
 * Features:
 * - Dark luxury aesthetic (teal-dark background)
 * - Centered mobile layout
 * - Full navigation on desktop, compact on mobile
 * - Interactive modals for legal documents
 * - Social media integration
 * - Staggered animations
 */
import { useState, useEffect } from "react";
import { FaInstagram, FaPhone, FaFacebook, FaYoutube, FaLocationArrow, FaMailBulk, FaTimes } from "react-icons/fa";
import "../App.css";
const serviceMap: Record<string, number> = {
  "Hip Replacement": 1,
  "Knee Replacement": 2,
  "Arthroscopy – Knee / Shoulder": 3,
  "Pelvis & Acetabulum Trauma": 4,
  "Foot & Ankle Surgery": 5,
  "Ilizarov & Limb Salvage": 6,
  "Complex Trauma Reconstruction": 7
};

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  // Navigation sections
  const sections = [
    { label: "Home", id: "hero" },
  { label: "Treatments", id: "services" },
  { label: "Why Choose Us", id: "why-choose" },
  { label: "Dr. Nishant Verma", id: "about" },
  // { label: "Clinical Expertise", id: "expertise" },
  ];
   

  const services = [
  { name: "Hip Replacement", id: "hip" },
  { name: "Knee Replacement", id: "knee" },
  { name: "Arthroscopy – Knee / Shoulder", id: "arthroscopy" },
  { name: "Pelvis & Acetabulum Trauma", id: "pelvis" },
  { name: "Foot & Ankle Surgery", id: "foot" },
  { name: "Ilizarov & Limb Salvage", id: "ilizarov" },
  { name: "Complex Trauma Reconstruction", id: "trauma" }
];   

  // Areas of expertise
  // const expertise = [
  //   "Hip & Knee Replacement",
  //   "Arthroscopy – Knee/Shoulder",
  //  "Pelvis & Acetabulum Trauma",
  //   "Foot & Ankle Surgery",
  //   "Illizarov & Limb Salvage",
  //   "Complex Trauma Reconstruction"
  // ];

  // Social media
  const socials = [
    { name: "Email", icon: "email", url: "mailto:drnishantverma422@gmail.com" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/orthodr.nishant/" },
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/profile.php?id=61588053463769" },
    { name: "YouTube", icon: "youtube", url: "https://youtube.com/@nishantverma36?si=YEkCbCO9WhQvDRDT" }
  ];

  // Modal content
  const modals = {
    privacy: {
      title: "Privacy Policy",
      content: `
        <h3>Privacy Policy for Dr. Nishant Verma</h3>
        
        <h4>1. Introduction</h4>
        <p>We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website.</p>
        
        <h4>2. Information We Collect</h4>
        <p>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
        <ul>
          <li>Personal identification information (name, email address, phone number)</li>
          <li>Medical information (only when voluntarily provided for consultation purposes)</li>
          <li>Usage data and website analytics</li>
        </ul>
        
        <h4>3. Use of Your Information</h4>
        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
        <ul>
          <li>Send periodic emails regarding your order or other products and services</li>
          <li>Generate a personal profile about you</li>
          <li>Increase the efficiency and operation of the site</li>
        </ul>
        
        <h4>4. Protection of Your Information</h4>
        <p>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.</p>
        
        <h4>5. Contact Us</h4>
        <p>If you have questions or concerns regarding this Privacy Policy, please contact us at drnishantverma422@gmail.com or +91 9416 0917 18.</p>
      `
    },
    terms: {
      title: "Terms of Service",
      content: `
        <h3>Terms of Service</h3>
        
        <h4>1. Agreement to Terms</h4>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h4>2. Use License</h4>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to reverse engineer any software contained on the site</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>
        
        <h4>3. Disclaimer</h4>
        <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        
        <h4>4. Limitations of Liability</h4>
        <p>In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials.</p>
        
        <h4>5. Accuracy of Materials</h4>
        <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.</p>
      `
    },
    disclaimer: {
      title: "Medical Disclaimer",
      content: `
        <h3>Medical Disclaimer</h3>
        
        <h4>1. General Disclaimer</h4>
        <p>The information provided on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
        
        <h4>2. No Medical Relationship</h4>
        <p>The use of this website and any information contained therein does not establish a doctor-patient relationship. No medical information on this site should be used as a substitute for professional diagnosis and treatment.</p>
        
        <h4>3. Emergency Services</h4>
        <p>If you believe you have a medical emergency, please call emergency services (100 in India) or proceed to the nearest hospital emergency room immediately.</p>
        
        <h4>4. Educational Information</h4>
        <p>All content on this website, including text, graphics, images, and information, are intended to provide general educational information only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website.</p>
        
        <h4>5. Professional Consultation</h4>
        <p>For any health concerns or medical decisions, please consult directly with Dr. Nishant Verma or another qualified orthopaedic surgeon. A proper consultation is essential for diagnosis and treatment planning.</p>
        
        <h4>6. Liability Limitation</h4>
        <p>In no event will Dr. Nishant Verma or any associated parties be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of information on this website.</p>
      `
    }
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openModal = (modalType) => {
    setActiveModal(modalType);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --primary: #2D8C7F;
          --primary-light: #3aa899;
          --primary-dark: #1f6860;
          --primary-muted: rgba(45, 140, 127, 0.08);
          --primary-border: rgba(45, 140, 127, 0.2);
          --ink: #0f1e1c;
          --ink-soft: #4a5e5b;
          --cream: #f7f9f8;
          --white: #ffffff;
          --dark-bg: #081210;
          --dark-card: #0a1a17;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* ────────────────────────────────────────
           FOOTER CONTAINER — DARK THEME
        ──────────────────────────────────────── */
        .footer {
          background: linear-gradient(135deg, var(--dark-bg) 0%, #0c1815 50%, var(--dark-bg) 100%);
          border-top: 1px solid rgba(45, 140, 127, 0.2);
          margin-top: 5rem;
          position: relative;
          overflow: hidden;
        }

        /* Subtle ambient glow */
        .footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(45, 140, 127, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(45, 140, 127, 0.05) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .footer-content {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 5rem);
        }

        /* ────────────────────────────────────────
           FOOTER GRID — DESKTOP
        ──────────────────────────────────────── */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1.8fr 1fr ;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        /* ── ABOUT SECTION (Left) ── */
        .footer-section-about {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .footer-section-about.in { opacity: 1; transform: none; }

        .footer-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.01em;
          margin-bottom: 0.5rem;
        }

        .footer-brand span { color: var(--primary-light); }

        .footer-tagline {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
          max-width: 280px;
        }

        .footer-socials {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(45, 140, 127, 0.15);
          border: 1px solid rgba(45, 140, 127, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-light);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.85rem;
        }

        .social-link:hover {
          background: var(--primary);
          color: var(--white);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(45, 140, 127, 0.4);
          border-color: var(--primary);
        }

        /* ── NAVIGATION SECTIONS ── */
        .footer-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .footer-section-nav { transition-delay: 0.2s; }
        .footer-section-nav.in { opacity: 1; transform: none; }

        .footer-section-services { transition-delay: 0.3s; }
        .footer-section-services.in { opacity: 1; transform: none; }

        

        .footer-section-expertise { transition-delay: 0.4s; }
        .footer-section-expertise.in { opacity: 1; transform: none; }

        .footer-section-contact { transition-delay: 0.5s; }
        .footer-section-contact.in { opacity: 1; transform: none; }

        .footer-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--white);
          letter-spacing: 0.02em;
          text-transform: uppercase;
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        // .footer-section-title::before {
        //   content: '';
        //   width: 3px;
        //   height: 3px;
        //   border-radius: 50%;
        //   background: var(--primary-light);
        // }

        .footer-link {
          display: block;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          margin-bottom: 0.75rem;
          position: relative;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-link:hover {
          color: var(--primary-light);
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-light);
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        /* ────────────────────────────────────────
           CONTACT SECTION
        ──────────────────────────────────────── */
        .footer-contact-item {
          margin-bottom: 1rem;
        }

        .footer-contact-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary-light);
          margin-bottom: 0.4rem;
        }

        .footer-contact-value {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
        }

        .footer-contact-value a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-contact-value a:hover {
          color: var(--primary-light);
        }

        /* ────────────────────────────────────────
           DIVIDER & BOTTOM BAR
        ──────────────────────────────────────── */
        .footer-divider {
          height: 1px;
          background: rgba(45, 140, 127, 0.2);
          margin-bottom: 2rem;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s;
        }
        .footer-divider.in {
          opacity: 1;
          transform: scaleX(1);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.65s, transform 0.7s ease 0.65s;
        }
        .footer-bottom.in { opacity: 1; transform: none; }

        .footer-copyright {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.01em;
        }

        .footer-legal {
          display: flex;
          gap: 2rem;
        }

        .footer-legal-link {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          font-family: 'DM Sans', sans-serif;
        }

        .footer-legal-link:hover {
          color: var(--primary-light);
        }

        /* ────────────────────────────────────────
           MODAL STYLES
        ──────────────────────────────────────── */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: var(--white);
          border-radius: 12px;
          max-width: 600px;
          max-height: 80vh;
          overflow-y: auto;
          padding: 2.5rem;
          position: relative;
          animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--primary-muted);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .modal-close:hover {
          background: var(--primary);
          color: var(--white);
          transform: rotate(90deg);
        }

        .modal-content h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: var(--ink);
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .modal-content h4 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          color: var(--primary);
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .modal-content p {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--ink-soft);
          margin-bottom: 1rem;
        }

        .modal-content ul {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .modal-content li {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--ink-soft);
          margin-bottom: 0.5rem;
        }

        /* ────────────────────────────────────────
           MOBILE RESPONSIVE
        ──────────────────────────────────────── */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-section-about {
            grid-column: 1 / -1;
            border-bottom: 1px solid rgba(45, 140, 127, 0.2);
            padding-bottom: 2rem;
            margin-bottom: 0.5rem;
            text-align: center;
          }

          .footer-socials {
            justify-content: center;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
            text-align: center;
          }

          .footer-legal {
            flex-direction: column;
            gap: 0.8rem;
            align-items: center;
          }
        }

        @media (max-width: 540px) {
          .footer-content {
            padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 2rem);
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .footer-section-about {
            grid-column: 1;
            border-bottom: 1px solid rgba(45, 140, 127, 0.2);
            padding-bottom: 1.5rem;
            margin-bottom: 0.5rem;
            text-align: center;
          }

          .footer-tagline {
            max-width: 100%;
            margin: 0 auto;
          }

          /* Hide some sections on mobile */
          .footer-section-nav,
          .footer-section-expertise,
          .footer-section-services,
          .footer-section-contact,
          .footer-tagline,
          .footer-brand,
          .footer-divider {
            display: none;
          }

          .footer-section-title {
            font-size: 0.85rem;
            margin-bottom: 1rem;
            justify-content: center;
          }

          .footer-link {
            font-size: 0.8rem;
            margin-bottom: 0.65rem;
            text-align: center;
          }

          .footer-contact-item {
            text-align: center;
          }

          .footer-bottom {
            border-top: 1px solid rgba(45, 140, 127, 0.2);
            padding-top: 1.5rem;
            margin-top: 1.5rem;
          }

          .footer-copyright {
            font-size: 0.75rem;
            order: 2;
          }

          .footer-legal {
            order: 1;
            margin-bottom: 1rem;
          }

          .footer-legal-link {
            font-size: 0.75rem;
          }

          .footer-socials {
            gap: 0.8rem;
          }

          .social-link {
            width: 32px;
            height: 32px;
            font-size: 0.75rem;
          }

          .modal-content {
            padding: 1.5rem;
            max-height: 90vh;
          }

          .modal-content h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
          }

          .modal-content h4 {
            font-size: 0.95rem;
            margin-top: 1rem;
          }

          .modal-content p,
          .modal-content li {
            font-size: 0.85rem;
          }

          .modal-close {
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
        }

        /* Tablet optimized */
        @media (max-width: 900px) and (min-width: 769px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }

          .footer-section-about {
            grid-column: 1 / -1;
            border-bottom: 1px solid rgba(45, 140, 127, 0.2);
            padding-bottom: 2rem;
            margin-bottom: 1rem;
            text-align: center;
          }

          .footer-socials {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-content">
          {/* Main footer grid */}
          <div className="footer-grid">
            
            {/* About / Brand Section */}
            <div className={`footer-section-about${visible ? " in" : ""}`}>
              <div>
                <h3 className="footer-brand">
                  Dr. Nishant <span>Verma</span>
                </h3>
                <p className="footer-tagline">
                  Consultant Orthopaedic Surgeon specializing in joint replacement, arthroscopy, and trauma reconstruction. Expert care with 10+ years of experience.
                </p>
              </div>
              
              <div className="footer-socials">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    title={social.name}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon === "instagram" && <FaInstagram />}
                    {social.icon === "facebook" && <FaFacebook />}
                    {social.icon === "youtube" && <FaYoutube />}
                    {social.icon === "email" && <FaMailBulk />}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Section */}
            <div className={`footer-section footer-section-nav${visible ? " in" : ""}`}>
              <h4 className="footer-section-title">Navigate</h4>
              {sections.map((section) => (
                <a
                  key={section.id}
                  className="footer-link"
                  onClick={() => handleScroll(section.id)}
                >
                  {section.label}
                </a>
              ))}
            </div>

            {/* Services Section */}
            <div className={`footer-section footer-section-services${visible ? " in" : ""}`}>
  <h4 className="footer-section-title">Services</h4>

  {services.map((service) => (
    <div
      key={service.id}
      className="footer-link cursor-pointer"
      onClick={() => {
  const id = serviceMap[service.name];

  // Scroll to section
  const section = document.getElementById("services");
  section?.scrollIntoView({ behavior: "smooth" });

  // Activate correct service
  setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent("selectService", { detail: id })
    );
  }, 400);
}}
    >
      {service.name}
    </div>
  ))}
</div>

            {/* Expertise Section */}
            {/* <div className={`footer-section footer-section-expertise${visible ? " in" : ""}`}>
              <h4 className="footer-section-title">Expertise</h4>
              {expertise.slice(0, 4).map((item) => (
                <div key={item} className="footer-link">
                  {item}
                </div>
              ))}
            </div> */}

            {/* Contact Section */}
            <div className={`footer-section footer-section-contact${visible ? " in" : ""}`}>
              <h4 className="footer-section-title">Contact</h4>
              
              <div className="footer-contact-item">
                <div className="footer-contact-label">Phone</div>
                <div className="footer-contact-value">
                  <a href="tel:9416091718">91 9416 0917 18</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-label">Location</div>
                <div className="footer-contact-value">
                  Sarovdya Hospital<br />Hisar, Haryana
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-label">Hours</div>
                <div className="footer-contact-value">
                  Mon - Sat<br />9:00 AM - 6:00 PM
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className={`footer-divider${visible ? " in" : ""}`} />

          {/* Bottom bar */}
          <div className={`footer-bottom${visible ? " in" : ""}`}>
            <div className="footer-copyright">
              © {currentYear} Dr. Nishant Verma. All rights reserved.
            </div>
            <div className="footer-legal">
              <button 
                onClick={() => openModal('privacy')}
                className="footer-legal-link"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => openModal('terms')}
                className="footer-legal-link"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => openModal('disclaimer')}
                className="footer-legal-link"
              >
                Medical Disclaimer
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <div dangerouslySetInnerHTML={{ __html: modals[activeModal]?.content }} />
          </div>
        </div>
      )}
    </>
  );
}