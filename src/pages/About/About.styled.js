import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: justify;
  }

  em {
    width: 100%;
    padding: 1rem;
    background-color: white;
  }

  p {
    max-width: 700px;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 1rem;
  margin: 1rem;
  background-color: #55555550;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  border: 1.5px solid #2c2c2c;
  backdrop-filter: blur(5px);
`;

export const Italics = styled.p`
  font-style: italic;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  width: 100%;
  margin: 1rem;
  small {
    font-size: 0.6rem;
    margin: 0.2rem 0;
  }
`;

export const AboutImage = styled.img`
  left: 0;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition-property: height, min-height;
  transition-duration: 0.1s;
  transition-delay: 0.1s;
  transition-timing-function: ease-in-out;
  margin: 0 0;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

export const SectionContainer = styled.div`
  display: flex;
  max-width: 700px;
  flex-direction: column;
  align-items: center;
  p,
  img {
    margin: 1rem;
    width: 100%;
  }
  a {
    color: #ffb337;
    transform: scale(1);
    transition: all 0.2s ease-in-out;
    @media (hover: hover) {
      &:hover {
        text-shadow: 0 0 10px #fff;
        transform: scale(1.03);
      }
    }
  }
`;

export const SectionWrapper = styled.div`
  align-items: center;
  display: flex;
  max-width: 700px;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    /* flex-direction: row; */
  }
  p,
  img {
    margin: 2rem 1rem;
    width: 100%;
    @media screen and (min-width: 900px) {
      /* width: 50%; */
    }
  }
  a {
    color: #ffb337;
    transform: scale(1);
    transition: all 0.2s ease-in-out;
    @media (hover: hover) {
      &:hover {
        text-shadow: 0 0 10px #fff;
        transform: scale(1.1);
      }
    }
  }
`;

export const SectionWrapperRow = styled.div`
  align-items: center;
  display: flex;
  max-width: 700px;
  flex-direction: row;
  @media screen and (orientation: portrait) {
    flex-direction: column;
  }
  img {
    height: 30vh;
    margin: 0;
    padding: 0;
  }
  div {
    margin: 1rem 0 !important;
  }
`;
