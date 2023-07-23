import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const MusicStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    margin: 2rem auto;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 75vw;
    flex-wrap: wrap;
  }
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
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    width: 30vh;
  }
`;

export const RegularLink = styled(Link)`
  cursor: pointer;
  margin: 1rem auto;
  text-align: center;
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.02);
    text-shadow: 0 0 10px #ffb337;
  }
`;
