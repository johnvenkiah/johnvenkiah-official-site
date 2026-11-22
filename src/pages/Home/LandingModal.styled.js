import styled from 'styled-components';
import { ModalContainer } from '../../components/Modal/Modal.styled';

export const LandingModalContainer = styled(ModalContainer)`
  width: 50%; /* Overrides the 30% width */
  height: 50vh;
  min-height: 450px;
  max-width: 600px; /* Prevents it from getting too absurdly wide on huge screens */

  /* Flexbox adjustments to stack the image and button vertically */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  transition: all 0.4s ease-in-out;
  backdrop-filter: blur(10px);

  h2,
  h3 {
    transition: all 0.2s ease-in-out;
    display: block;
    text-align: center;
  }
  div {
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease-in-out;

    a {
      max-height: 100%;
    }
    @media (hover: hover) {
      &:hover {
        transform: scale(1.02);
        h2,
        h3 {
          transform: scale(1.02);
          transition: all 0.3s ease-in-out;
          text-shadow: 0 0 10px #ffb337;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 90vw; /* Take up more room on mobile */
    height: 60vh;
    max-width: none;
  }
`;

export const CoverArtImage = styled.img`
  width: 100%;
  max-width: 300px; /* Keeps the image from blowing up too large */
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  box-shadow: 0 0 1rem 0 #000;
  margin-bottom: 2rem;
  object-fit: cover;
  display: block;
`;
