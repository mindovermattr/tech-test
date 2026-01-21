import type { ReactNode } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: TModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};
