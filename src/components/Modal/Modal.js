import { ModalStyled, ModalContainer } from './Modal.styled';
import { useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useOnClickOutside } from '../../hooks';

const Modal = ({ modalOpen, setModalOpen, children }) => {
  const modalRef = useRef(null);
  const closeButtonStyle = {
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    filter: 'drop-shadow(0px 0px 2px #000)',
  };
  useOnClickOutside(modalRef, () => setModalOpen(false));
  modalOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
  return (
    <>
      <ModalStyled modalOpen={modalOpen}>
        <ModalContainer ref={modalRef}>
          <button onClick={() => setModalOpen(!modalOpen)}>
            <IoMdClose style={closeButtonStyle} />
          </button>
          {children}
        </ModalContainer>
      </ModalStyled>
    </>
  );
};
export default Modal;
