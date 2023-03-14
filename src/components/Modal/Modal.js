import { IntroModal } from './Modal.styled';
import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, toggleModal, closeOnOutsideClick, children }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        closeOnOutsideClick &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        toggleModal();
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, closeOnOutsideClick, toggleModal]);
  return (
    <IntroModal style={!isOpen ? { display: 'none' } : { display: 'flex' }}>
      <div ref={modalRef}>{children}</div>
    </IntroModal>
  );
};
export default Modal;
