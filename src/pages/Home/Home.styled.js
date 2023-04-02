import styled from 'styled-components';

export const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
