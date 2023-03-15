import { IntroModal } from './Modal.styled';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, toggleModal, closeOnOutsideClick, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        closeOnOutsideClick &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        console.log(modalRef.current);
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
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          key={isOpen}
        >
          <IntroModal style={isOpen ? { display: 'none' } : null}>
            <div ref={modalRef}>{children}</div>
          </IntroModal>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
