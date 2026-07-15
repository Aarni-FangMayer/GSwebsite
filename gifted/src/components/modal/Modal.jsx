import React from "react";
import { useEffect } from "react";

import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  width = "500px",
  closeOnOverlay = true,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={closeOnOverlay ? onClose : undefined}
    >
      <div
        className="modal"
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || onClose) && (
          <div className="modal-header">
            {title && <h2>{title}</h2>}

            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Закрыть"
            >
              ×
            </button>
          </div>
        )}

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

/*

return (
    <>
      <button onClick={() => setOpen(true)}>
        Открыть модальное окно
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Настройки"
        width="600px"
      >
        <p>Любой JSX здесь.</p>

        <button onClick={() => setOpen(false)}>
          Закрыть
        </button>
      </Modal>
    </>
  );
}

*/
