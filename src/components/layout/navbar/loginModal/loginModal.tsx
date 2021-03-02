import { useState } from 'react';
import Modal from 'react-modal';

interface ComponentProps {
  isModalOpen: boolean;
}

export const LoginModal: React.FC<ComponentProps> = ({ isModalOpen }) => {
  const [textfieldContent, setTextfieldContent] = useState('');
  return (
    <Modal isOpen={isModalOpen}>
      <h3>Přihlásit se</h3>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </Modal>
  );
};
