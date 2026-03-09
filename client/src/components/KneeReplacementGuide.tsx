import { useState } from "react";
import { FaChevronRight, FaTimes, FaArrowLeft } from "react-icons/fa";
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

  const modalContent: ModalContent = kneeModalContent as ModalContent;

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

  const renderContent = (content: string | undefined) => {
    if (typeof content === "string") {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return content;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --primary: #2D8C7F;
          --primary-dark: #1f6860;
          --primary-light: #E8F5F3;
          --primary-muted: rgba(45,140,127,0.07);
          --primary-border: rgba(45,140,127,0.2);
        }

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

        .krg-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          z-index: 50;
          max-width: 90vw;
          width: 100%;
          max-height: 85vh;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
          display: flex;
          flex-direction: column;
        }

        .krg-modal.active {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
          pointer-events: auto;
        }

        .krg-modal-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          min-height: 0;
        }

        .krg-modal-header {
          padding: 2rem;
          border-bottom: 1px solid var(--primary-border);
          background: linear-gradient(135deg, var(--primary-muted) 0%, rgba(45,140,127,0.03) 100%);
          flex-shrink: 0;
        }

        .krg-modal-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
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
          flex-shrink: 0;
        }

        .krg-modal-body {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 2rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          line-height: 1.8;
          color: #4a4a46;
          min-height: 0;
        }

        .krg-modal-body::-webkit-scrollbar {
          width: 8px;
        }

        .krg-modal-body::-webkit-scrollbar-track {
          background: #f0f7f6;
        }

        .krg-modal-body::-webkit-scrollbar-thumb {
          background: var(--primary-border);
          border-radius: 4px;
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
          background: #fff;
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
          color: #1a1a1a;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .krg-item-preview {
          font-size: 0.85rem;
          color: #7a7a75;
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

        .krg-modal-footer {
          padding: 1.5rem 2rem;
          border-top: 1px solid var(--primary-border);
          display: flex;
          gap: 1rem;
          justify-content: flex-start;
          align-items: center;
          background: #f7f9f8;
          flex-shrink: 0;
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

          .krg-items-grid {
            grid-template-columns: 1fr;
          }

          .krg-btn-close {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>

      <div className="krg-sticky-bar">
        <button
          className="krg-trigger-btn"
          onClick={() => {
            setIsOpen(!isOpen);
            setActiveModal(!isOpen ? "main" : null);
            setHistory([]);
          }}
        >
          {!isOpen ? "📘 Total Knee Replacement" : "✕"}
        </button>
      </div>

      <div
        className={`krg-modal-backdrop${isOpen ? " active" : ""}`}
        onClick={resetModals}
      />

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
