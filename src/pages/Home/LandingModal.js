import { LandingModalContainer, CoverArtImage } from './LandingModal.styled';
import { IoMdClose } from 'react-icons/io';
import { ModalStyled } from '../../components/Modal/Modal.styled';
import { useState } from 'react';

const LandingModal = ({
  landingModalOpen,
  setLandingModalOpen,
  linkData,
  coverArt,
}) => {
  const closeButtonStyle = {
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    filter: 'drop-shadow(0px 0px 2px #000)',
  };
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <ModalStyled modalOpen={landingModalOpen && imageLoaded}>
      <LandingModalContainer>
        <button onClick={() => setLandingModalOpen(!landingModalOpen)}>
          <IoMdClose style={closeButtonStyle} />
        </button>
        <div>
          <h2>New single OUT NOW</h2>
          <a href={linkData.url} target="_blank" rel="noopener noreferrer">
            <CoverArtImage
              src={coverArt}
              alt="It Feels So Good Cover Art"
              onLoad={() => setImageLoaded(true)}
            />

            <h3>{linkData.text}</h3>
          </a>
        </div>
      </LandingModalContainer>
    </ModalStyled>
  );
};

export default LandingModal;
