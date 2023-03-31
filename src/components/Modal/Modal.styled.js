import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSpotify, FaDeezer, FaItunesNote } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';

export const ModalStyled = styled.div`
  position: fixed;
  visibility: ${({ modalOpen }) => (modalOpen ? 'visible' : 'hidden')};
  display: flex;
  opacity: ${({ modalOpen }) => (modalOpen ? '1' : '0')};
  transform: ${({ modalOpen }) => (modalOpen ? 'scale(1)' : 'scale(.95)')};
  justify-content: center;
  align-items: center;
  z-index: 11;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.4s ease-in-out;
  backdrop-filter: blur(10px);

  button {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    padding: 0.5rem;
    border: none;
    background: transparent;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    width: 50%;
    box-shadow: 0 0 15px #000;
    margin-top: 1rem;
  }

  p {
    font-weight: bold;
    font-size: 1rem;
    padding: 0;
    margin: 0.5rem;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 30%;
  background-color: rgba(38, 50, 50, 0.5);
  text-align: center;
  transform: translateY(-50%);
  padding: 1rem 0.2rem 0.5rem;
  border-top: 0.7px solid #b6b6b666;
  border-right: 0.7px solid #8e8e8e66;
  border-bottom: 0.7px solid #000;
  border-left: 0.7px solid #77777766;
  border-radius: 18px;
  box-shadow: 0 0 1rem 0 #000;
  min-height: 200px;
  display: inherit;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 80vh;
    transform: translateY(-45%);
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 2rem;

  svg {
    filter: drop-shadow(0px 0px 2px #000);
  }
`;

export const HorRule = styled.hr`
  width: 80%;
  border: 0.5px solid #555;
`;

export const ModLink = styled(Link)`
  color: #fff;
  font-weight: 600;
  width: 80%;
  margin: 0.5rem;
  background: radial-gradient(black 55%, transparent);
  border: #77777766 0.1rem solid;
  border-radius: 14px;
  box-shadow: 0 0 1rem 0 #000;
  padding: 0.5rem;
  cursor: pointer;

  &.active {
    color: #ffb337;
  }
`;

export const Spotify = styled(FaSpotify)`
  color: #1ed760;
`;
export const Deezer = styled(FaDeezer)`
  fill: url(#rainbow-gradient);
`;
export const Itunes = styled(FaItunesNote)`
  color: #fa243c;
`;
export const Tidal = styled(SiTidal)`
  color: #78f3f3;
`;
