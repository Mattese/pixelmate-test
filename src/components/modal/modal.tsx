import { useEffect } from 'react';
import styles from './modal.module.scss';
import { ReactComponent as CloseIcon } from 'src/assets/flaticon1558102309-svg.svg';
import ReactDom from 'react-dom';

interface ComponentProps {
  isModalVisible: boolean;
  onModalClose: () => void;
}

export const Modal: React.FC<ComponentProps> = ({ children, isModalVisible, onModalClose }) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onModalClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  if (isModalVisible) {
    return ReactDom.createPortal(
      <div className={styles.modalWrapper}>
        <div className={styles.modalBackdrop} onClick={onModalClose} />
        <div className={styles.modalBox}>
          <div>
            <div className={styles.closeIconWrapper} onClick={() => onModalClose()}>
              <CloseIcon />
            </div>
            {children}
          </div>
        </div>
      </div>,
      document.getElementById('modal-root') as HTMLElement,
    );
  }
  return null;
};
