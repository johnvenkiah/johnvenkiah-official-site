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

export const AboutImage = styled.img`
  max-width: 700px;
  top: 50vh;
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
    margin: 2rem 1rem;
    width: 100%;
  }
`;

export const SectionWrapper = styled.div`
  align-items: center;
  display: flex;
  max-width: 700px;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
  p,
  img {
    margin: 2rem 1rem;
    width: 100%;
    @media screen and (min-width: 900px) {
      width: 50%;
    }
  }
`;
