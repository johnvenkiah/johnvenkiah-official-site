import styled from 'styled-components';

export const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    position: fixed;
    top: 50%;
    text-align: center;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.4rem;
    text-transform: uppercase;
    transform: translateY(-50%);
    width: 80%;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AlbumWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 1rem auto 2rem;
    text-align: center;
    width: 70%;
  }
`;

export const AlbumImg = styled.img`
  width: 40vh;
  box-shadow: 0 0 15px #000;
`;
