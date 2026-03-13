/**
 * Navbar.jsx — Refined for perfect Mobile Centering & Responsiveness
 */
import { useState, useEffect } from "react";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { label: "Home", id: "hero" },
  { label: "Treatments", id: "services" },
  { label: "Why Choose Us", id: "why-choose" },
  { label: "Dr. Nishant Verma", id: "about" },
  // { label: "Clinical Expertise", id: "expertise" },
];

  const handleNavClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);
    document.body.classList.remove("menu-open");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust based on nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --primary: #2D8C7F;
          --primary-dark: #1f6860;
          --ink: #0f1e1c;
          --ink-soft: #4a5e5b;
          --white: #ffffff;
          --nav-height: 72px;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--white);
          transition: all 0.3s ease;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .navbar.scrolled {
          height: 64px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .nav-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ─── LOGO ─── */
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          z-index: 1001;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--primary);
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 20px;
        }

        .logo-text { line-height: 1.1; }
        .logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--ink);
          display: block;
        }
        .logo-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary);
        }

        /* ─── DESKTOP NAV ─── */
        .nav-menu {
          display: flex;
          gap: 32px;
        }

        .nav-item {
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--ink-soft);
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-item:hover, .nav-item.active { color: var(--primary); }

        /* ─── ACTION AREA ─── */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .phone-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--primary);
          color: white;
          padding: 10px 18px;
          border-radius: 8px;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .phone-btn:hover { background: var(--primary-dark); transform: translateY(-2px); }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--ink);
          font-size: 24px;
          cursor: pointer;
          padding: 5px;
        }

        /* ─── MOBILE DRAWER ─── */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 300px;
          height: 100vh;
          background: white;
          z-index: 999;
          transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 100px 30px;
          display: flex;
          flex-direction: column;
          gap: 25px;
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }

        .mobile-drawer.open { right: 0; }

        .mobile-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
          z-index: 998;
        }

        .overlay.active { opacity: 1; visibility: visible; }

        /* ────────────────────────────────────────
           RESPONSIVE BREAKPOINTS
        ──────────────────────────────────────── */
        @media (max-width: 1024px) {
          .nav-menu { display: none; }
          .menu-toggle { display: block; }
          .phone-btn span { display: none; }
          .phone-btn { padding: 12px; border-radius: 50%; }
        }

        @media (max-width: 480px) {
          .nav-container { padding: 0 15px; }
          .logo-name { font-size: 16px; }
          .logo-icon { width: 35px; height: 35px; font-size: 16px; }
          .navbar { height: 64px; }
        }

        body.menu-open { overflow: hidden; }
      `}</style>

      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Brand */}
          <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}>
            <div className="logo-icon">N</div>
            <div className="logo-text">
              <span className="logo-name">Dr. Nishant</span>
              <span className="logo-title">Orthopaedic</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="nav-menu">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-item ${activeLink === link.id ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Call & Toggle */}
          <div className="nav-actions">
            <a href="tel:+918837667062" className="phone-btn">
              <FaPhone size={14} />
              <span>+91 88376 67062</span>
            </a>
            <button 
              className="menu-toggle" 
              onClick={() => {
                setIsOpen(!isOpen);
                document.body.classList.toggle("menu-open");
              }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`overlay ${isOpen ? "active" : ""}`} onClick={() => { setIsOpen(false); document.body.classList.remove("menu-open"); }} />
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="mobile-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}