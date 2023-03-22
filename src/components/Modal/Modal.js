import { IntroModal, ModalContainer } from './Modal.styled';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

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
  const closeButtonStyle = {
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    filter: 'drop-shadow(0px 0px 2px #000)',
  };
  !isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
  return (
    <AnimatePresence>
      !isOpen && (
      <motion.div
        style={isOpen ? { display: 'none' } : null}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={isOpen}
      >
        <IntroModal>
          <ModalContainer
            ref={modalRef}
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <button onClick={toggleModal}>
              <IoMdClose style={closeButtonStyle} />
            </button>
            {children}
          </ModalContainer>
        </IntroModal>
      </motion.div>
      )
    </AnimatePresence>
  );
};
export default Modal;
