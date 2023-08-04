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
    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
      }
    }
    @media (hover: none) {
      &:active {
        transform: scale(1.1);
      }
    }
  }

  p {
    font-weight: bold;
    font-size: 0.9rem;
    padding: 0;
    margin: 0.2rem auto;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 30%;
  background-color: rgba(38, 50, 50, 0.5);
  text-align: center;
  transform: translateY(-50%);
  padding: 0.2rem 0.2rem 0;
  border: 0.8px solid #b6b6b666;
  border-radius: 18px;
  box-shadow: 0 0 1rem 0 #000;
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 80vh;
    max-width: 390px;
    max-height: 600px;
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
export const ModalHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0.2rem 0.2rem 0.2rem;
  height: 33%;
  padding: 0.5rem;
  background-color: #1129;
  font-size: 1.8rem;
  border-radius: 12px;
  border: #77777766 0.1rem solid;

  div {
    max-width: 58%;
    display: flex;
    flex-direction: column;
  }

  img {
    width: 35%;
  }

  small {
    font-size: 0.8rem;
  }
`;

export const HorRule = styled.hr`
  width: 75%;
  border-radius: 5px;
  height: 0rem;
  border: 0.5px solid #555;
`;

export const BuyLinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  padding: 0 0 0.6rem;
  margin: 0 auto;
`;

export const BuyLink = styled(Link)`
  color: #fff;
  font-weight: 600;
  width: 97%;
  max-height: 3.4rem;
  background-color: #ff880029;
  border: #77777766 0.1rem solid;
  border-radius: 12px;
  box-shadow: 0 0 1rem 0 #000;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: #ffb337;
      background-color: #1a1a1a08;
      box-shadow: 0 0 1rem 0 #8d5a2b;
      border: 0.1rem solid orange;
      text-shadow: black 0 0 10px 5px;
    }
  }
  @media (hover: none) {
    &:active {
      color: #ffb337;
      background-color: #1a1a1a08;
      box-shadow: 0 0 1rem 0 #8d5a2b;
      border: 0.1rem solid orange;
      text-shadow: black 0 0 10px 5px;
    }
  }
`;
export const ListenLink = styled(Link)`
  color: $mainLightColor;
  font-weight: 600;
  width: 85%;
  margin: 0.2rem;
  padding: 0.5rem;
  border-radius: 14px;
  border: 0.5px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: #ffb337;
      background-color: #1a1a1a08;
      box-shadow: 0 0 1rem 0 #8d5a2b;
      border: 0.5px solid orange;
      text-shadow: black 0 0 10px 5px;
      scale: 1.02;
    }
  }
  @media (hover: none) {
    &:active {
      color: #ffb337;
      background-color: #1a1a1a08;
      box-shadow: 0 0 1rem 0 #8d5a2b;
      border: 0.5px solid orange;
      text-shadow: black 0 0 10px 5px;
      scale: 1.02;
    }
  }
  p {
    font-size: 0.8rem;
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
