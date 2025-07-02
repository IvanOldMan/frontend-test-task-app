import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { getModalRootNode } from '../utils/ts';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose} aria-label="Закрыть">
          ×
        </button>
        {children}
      </div>
    </div>,
    getModalRootNode()
  );
};
