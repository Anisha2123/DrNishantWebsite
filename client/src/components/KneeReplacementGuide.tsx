import { useState } from "react";
import { FaChevronRight, FaTimes, FaArrowLeft, FaBook } from "react-icons/fa";
import { kneeModalContent } from "./kneeData";

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
  const [activeTab, setActiveTab] = useState<"image" | "content">("content");

  const modalContent: ModalContent = kneeModalContent as ModalContent;

  const openModal = (key: string) => {
    setHistory([...history, activeModal]);
    setActiveModal(key);
    setActiveTab("content");
    // Ensure content is visible on mobile
    setTimeout(() => {
      const contentTab = document.querySelector('.krg-modal-content-mobile-tab.active');
      if (contentTab) {
        contentTab.scrollTop = 0;
      }
    }, 0);
  };

  const closeModal = () => {
    if (history.length > 0) {
      setActiveModal(history[history.length - 1]);
      setHistory(history.slice(0, -1));
      setActiveTab("content");
    } else {
      setActiveModal(null);
    }
  };

  const resetModals = () => {
    setActiveModal(null);
    setHistory([]);
    setIsOpen(false);
  };

  const renderContent = (content: string | undefined) => {
    if (typeof content === "string") {
      return <div className="krg-html-content" dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return content;
  };

  const currentModal = activeModal && modalContent[activeModal];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --primary: #2D8C7F;
          --primary-dark: #1f6860;
          --primary-light: #E8F5F3;
          --primary-muted: rgba(45,140,127,0.08);
          --primary-border: rgba(45,140,127,0.15);
          --text-primary: #0f172a;
          --text-secondary: #64748b;
          --bg-light: #f8fafc;
          --bg-lighter: #f1f5f9;
          --border-color: #e2e8f0;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* ─────────────────────────────
           STICKY BAR
        ───────────────────────────── */
        .krg-sticky-bar {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 40;
        }

        .krg-trigger-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(45, 140, 127, 0.25);
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        .krg-trigger-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(45, 140, 127, 0.35);
        }

        .krg-trigger-btn:active {
          transform: translateY(0);
        }

        /* ─────────────────────────────
           MODAL BACKDROP
        ───────────────────────────── */
        .krg-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(6px);
          z-index: 45;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .krg-modal-backdrop.active {
          opacity: 1;
          visibility: visible;
        }

        /* ─────────────────────────────
           MODAL CONTAINER
        ───────────────────────────── */
        .krg-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.95);
          opacity: 0;
          z-index: 50;
          width: 100%;
          max-height: 90vh;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          display: flex;
          flex-direction: column;
        }

        .krg-modal.active {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
          pointer-events: auto;
        }

        /* ─────────────────────────────
           DESKTOP LAYOUT (1024px+)
           Side-by-side: Image Left | Content Right
        ───────────────────────────── */
        @media (min-width: 1024px) {
        .krg-modal-body-mobile,
.krg-modal-body-mobile-direct,
.krg-modal-image-mobile-tab,
.krg-modal-content-mobile-tab {
  display: none !important;
}

        
          .krg-modal {
            max-width: 1200px;
            max-height: 85vh;
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            grid-template-rows: auto 1fr auto;
          }

          .krg-modal-header {
            grid-column: 1 / -1;
            grid-row: 1;
          }

          .krg-modal-image-left {
            grid-column: 1;
            grid-row: 2;
            width: 100%;
            height: 100%;
            display: block !important;
            border-right: 1px solid var(--border-color);
            overflow: hidden;
            background: var(--bg-lighter);
          }

          .krg-modal-image-left img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 0.4s ease;
          }

          .krg-modal-image-left img:hover {
            transform: scale(1.03);
          }

          .krg-modal-body {
            grid-column: 2;
            grid-row: 2;
            padding: 2.5rem;
            overflow-y: auto;
          }

          .krg-modal-header-tablet {
            display: none !important;
          }

          .krg-tabs-mobile {
            display: none !important;
          }

          .krg-modal-body-mobile {
            display: none !important;
          }

          .krg-modal-footer {
            grid-column: 1 / -1;
            grid-row: 3;
          }
        }

        /* ─────────────────────────────
           TABLET LAYOUT (769px - 1023px)
        ───────────────────────────── */
        @media (max-width: 1023px) and (min-width: 769px) {
          .krg-modal {
            max-width: 90vw;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
          }

          .krg-modal-header-tablet {
            display: flex !important;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            background: var(--bg-light);
            flex-shrink: 0;
          }

          .krg-modal-image-tablet {
            width: 120px;
            height: 120px;
            min-width: 120px;
            border-radius: 8px;
            object-fit: cover;
            border: 1px solid var(--border-color);
            display: block !important;
          }

          .krg-modal-title-section {
            flex: 1;
            min-width: 0;
          }

          .krg-modal-body {
            flex: 1;
            padding: 2rem;
            overflow-y: auto;
            min-height: 0;
          }

          .krg-modal-header {
            display: none !important;
          }

          .krg-tabs-mobile {
            display: none !important;
          }

          .krg-modal-body-mobile {
            display: none !important;
          }

          .krg-modal-image-left {
            display: none !important;
          }
        }

        /* ─────────────────────────────
           MOBILE LAYOUT (≤768px)
        ───────────────────────────── */
        @media (max-width: 768px) {
          .krg-modal {
            max-width: 95vw;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
          }

          .krg-modal-header {
            padding: 1.25rem;
            border-bottom: 1px solid var(--border-color);
            flex-shrink: 0;
            background: #fff;
          }

          .krg-modal-title {
            font-size: 1.25rem;
          }

          .krg-tabs-mobile {
            display: flex !important;
            background: var(--bg-light);
            border-bottom: 1px solid var(--border-color);
            gap: 0;
            padding: 0;
            flex-shrink: 0;
          }

          .krg-tab-btn-mobile {
            flex: 1;
            padding: 0.875rem;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--text-secondary);
            font-weight: 500;
            font-family: 'Inter', sans-serif;
            font-size: 0.875rem;
            border-bottom: 2px solid transparent;
            transition: all 0.2s ease;
            min-height: 44px;
          }

          .krg-tab-btn-mobile:hover {
            color: var(--primary);
            background: rgba(45, 140, 127, 0.04);
          }

          .krg-tab-btn-mobile.active {
            color: var(--primary);
            border-bottom-color: var(--primary);
          }

          .krg-modal-body-mobile {
            display: flex !important;
            flex: 1;
            min-height: 0;
            overflow: hidden;
          }

          .krg-modal-body-mobile-direct {
            display: flex !important;
            flex: 1;
            overflow-y: auto;
            padding: 1.5rem;
            min-height: 0;
            width: 100%;
            flex-direction: column;
          }

          .krg-modal-image-mobile-tab {
            display: none;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .krg-modal-image-mobile-tab.active {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .krg-modal-image-mobile-tab img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .krg-modal-content-mobile-tab {
            display: none;
            flex: 1;
            overflow-y: auto;
            padding: 1.5rem;
            min-height: 0;
            width: 100%;
          }

          .krg-modal-content-mobile-tab.active {
            display: block;
          }

          .krg-modal-header-tablet {
            display: none !important;
          }

          .krg-modal-body {
            display: none !important;
          }

          .krg-modal-image-left {
            display: none !important;
          }

          .krg-items-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ─────────────────────────────
           MODAL HEADER STYLES
        ───────────────────────────── */
        .krg-modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          background: #fff;
          flex-shrink: 0;
        }

        .krg-modal-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .krg-modal-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: var(--primary);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
        }

        /* ─────────────────────────────
           MODAL BODY STYLES
        ───────────────────────────── */
        .krg-modal-body {
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .krg-modal-body {
            display: none !important;
          }
        }

        .krg-html-content h3 {
          color: var(--primary);
          margin: 1.5rem 0 0.75rem;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .krg-html-content h4 {
          color: var(--text-primary);
          margin: 1.25rem 0 0.5rem;
          font-size: 1rem;
          font-weight: 600;
        }

        .krg-html-content h5 {
          color: var(--primary);
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .krg-html-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }

        .krg-html-content ul {
          list-style: none;
          padding: 0;
        }

        .krg-html-content li {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .krg-html-content li:before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: 600;
        }

        .krg-html-content div[style*="background"] {
          background: var(--bg-light) !important;
          border-left: 3px solid var(--primary) !important;
          padding: 1rem !important;
          border-radius: 6px !important;
          margin-bottom: 1rem !important;
        }

        .krg-modal-body::-webkit-scrollbar {
          width: 6px;
        }

        .krg-modal-body::-webkit-scrollbar-track {
          background: transparent;
        }

        .krg-modal-body::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 3px;
        }

        .krg-modal-body::-webkit-scrollbar-thumb:hover {
          background: var(--primary-border);
        }

        .krg-modal-content-mobile-tab::-webkit-scrollbar {
          width: 6px;
        }

        .krg-modal-content-mobile-tab::-webkit-scrollbar-track {
          background: transparent;
        }

        .krg-modal-content-mobile-tab::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 3px;
        }

        .krg-modal-content-mobile-tab::-webkit-scrollbar-thumb:hover {
          background: var(--primary-border);
        }

        .krg-modal-body-mobile-direct::-webkit-scrollbar {
          width: 6px;
        }

        .krg-modal-body-mobile-direct::-webkit-scrollbar-track {
          background: transparent;
        }

        .krg-modal-body-mobile-direct::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 3px;
        }

        .krg-modal-body-mobile-direct::-webkit-scrollbar-thumb:hover {
          background: var(--primary-border);
        }

        /* ─────────────────────────────
           ITEMS GRID
        ───────────────────────────── */
        .krg-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .krg-item-card {
          padding: 1.25rem;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          background: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .krg-item-card:hover {
          border-color: var(--primary);
          background: var(--primary-muted);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(45, 140, 127, 0.12);
        }

        .krg-item-name {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          font-size: 0.95rem;
        }

        .krg-item-preview {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          margin-bottom: 0;
          line-height: 1.5;
        }

        .krg-item-arrow {
          width: 16px;
          height: 16px;
          color: var(--primary);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .krg-item-card:hover .krg-item-arrow {
          transform: translateX(3px);
        }

        /* ─────────────────────────────
           MODAL FOOTER
        ───────────────────────────── */
        .krg-modal-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 0.75rem;
          justify-content: flex-start;
          align-items: center;
          background: var(--bg-light);
          flex-shrink: 0;
        }

        .krg-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 16px;
          border-radius: 6px;
          border: 1px solid var(--border-color);
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 40px;
          white-space: nowrap;
          background: #fff;
          color: var(--text-primary);
        }

        .krg-btn:hover {
          background: var(--bg-light);
          border-color: var(--primary);
          color: var(--primary);
        }

        .krg-btn:active {
          transform: scale(0.98);
        }

        .krg-btn-back {
          background: var(--primary-muted);
          color: var(--primary);
          border: 1px solid var(--primary-border);
        }

        .krg-btn-back:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .krg-btn-close {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          margin-left: auto;
        }

        .krg-btn-close:hover {
          background: var(--bg-light);
          color: var(--text-primary);
          border-color: var(--primary);
        }

        /* ─────────────────────────────
           RESPONSIVE ADJUSTMENTS
        ───────────────────────────── */
        @media (max-width: 480px) {
          .krg-sticky-bar {
            bottom: 1rem;
            right: 1rem;
          }

          .krg-trigger-btn {
            padding: 10px 14px;
            font-size: 0.8125rem;
            gap: 8px;
          }

          .krg-modal {
            max-width: 98vw;
            max-height: 80vh;
          }

          .krg-modal-header {
            padding: 1rem;
          }

          .krg-modal-title {
            font-size: 1.125rem;
          }

          .krg-modal-body,
          .krg-modal-content-mobile-tab {
            padding: 1rem;
            font-size: 0.875rem;
          }

          .krg-btn {
            padding: 8px 12px;
            font-size: 0.8125rem;
            min-height: 36px;
          }

          .krg-btn-close {
            width: 100%;
            margin-left: 0;
          }

          .krg-items-grid {
            gap: 0.75rem;
          }
        }
      `}</style>

      {/* STICKY TRIGGER BUTTON */}
      <div className="krg-sticky-bar">
        <button
          className="krg-trigger-btn"
          onClick={() => {
            setIsOpen(!isOpen);
            setActiveModal(!isOpen ? "main" : null);
            setHistory([]);
            setActiveTab("content");
          }}
          aria-label="Open Knee Replacement Guide"
        >
          <FaBook size={16} />
          {!isOpen ? "Knee Guide" : "Close"}
        </button>
      </div>

      {/* MODAL BACKDROP */}
      <div
        className={`krg-modal-backdrop${isOpen ? " active" : ""}`}
        onClick={resetModals}
      />

      {/* MODAL */}
      <div className={`krg-modal${activeModal ? " active" : ""}`}>
        {currentModal && (
          <>
            {/* ─── DESKTOP & TABLET HEADER ─── */}
            <div className="krg-modal-header">
              <div className="krg-modal-subtitle">
                {currentModal.parent === "main" ? "Guide" : "Details"}
              </div>
              <h2 className="krg-modal-title">{currentModal.title}</h2>
            </div>

            {/* ─── TABLET HEADER (Inline Image) ─── */}
            {currentModal.image && (
              <div className="krg-modal-header-tablet">
                <img
                  src={currentModal.image}
                  alt={currentModal.title}
                  className="krg-modal-image-tablet"
                />
                <div className="krg-modal-title-section">
                  <div className="krg-modal-subtitle">
                    {currentModal.parent === "main" ? "Guide" : "Details"}
                  </div>
                  <h2 className="krg-modal-title">{currentModal.title}</h2>
                </div>
              </div>
            )}

            {/* ─── MOBILE TAB BUTTONS (Only for detail pages with content) ─── */}
            {currentModal.image && currentModal.content && (
              <div className="krg-tabs-mobile">
                <button
                  className={`krg-tab-btn-mobile ${activeTab === "image" ? "active" : ""}`}
                  onClick={() => setActiveTab("image")}
                >
                  📸 Image
                </button>
                <button
                  className={`krg-tab-btn-mobile ${activeTab === "content" ? "active" : ""}`}
                  onClick={() => setActiveTab("content")}
                >
                  📄 Content
                </button>
              </div>
            )}

            {/* ─── DESKTOP: IMAGE ON LEFT ─── */}
            {currentModal.image && (
              <div className="krg-modal-image-left">
                <img
                  src={currentModal.image}
                  alt={currentModal.title}
                />
              </div>
            )}

            {/* ─── DESKTOP & TABLET: CONTENT BODY ─── */}
            <div className="krg-modal-body">
              {currentModal.description && (
                <p style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>
                  {currentModal.description}
                </p>
              )}

              {currentModal.sections ? (
                <div className="krg-items-grid">
                  {currentModal.sections.map((section) => (
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
              ) : currentModal.items ? (
                <div className="krg-items-grid">
                  {currentModal.items.map((item) => (
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
              ) : currentModal.content ? (
                renderContent(currentModal.content)
              ) : null}
            </div>

            {/* ─── MOBILE: TABBED CONTENT (Only when there are tabs) ─── */}
            {currentModal.image && currentModal.content && (
              <div className="krg-modal-body-mobile">
                {/* Image Tab */}
                {currentModal.image && (
                  <div className={`krg-modal-image-mobile-tab${activeTab === "image" ? " active" : ""}`}>
                    <img
                      src={currentModal.image}
                      alt={currentModal.title}
                    />
                  </div>
                )}

                {/* Content Tab */}
                <div className={`krg-modal-content-mobile-tab${activeTab === "content" ? " active" : ""}`}>
                  {currentModal.description && (
                    <p style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>
                      {currentModal.description}
                    </p>
                  )}
                  {renderContent(currentModal.content)}
                </div>
              </div>
            )}

            {/* ─── MOBILE: DIRECT CONTENT (For category modals without tabs) ─── */}
            {(!currentModal.image || !currentModal.content) && (
              <div className="krg-modal-body-mobile-direct">
                {currentModal.description && (
                  <p style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>
                    {currentModal.description}
                  </p>
                )}

                {currentModal.sections ? (
                  <div className="krg-items-grid">
                    {currentModal.sections.map((section) => (
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
                ) : currentModal.items ? (
                  <div className="krg-items-grid">
                    {currentModal.items.map((item) => (
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
                ) : null}
              </div>
            )}

            {/* ─── FOOTER ─── */}
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
    </>
  );
}