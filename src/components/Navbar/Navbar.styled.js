import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: linear-gradient(black, transparent);
  height: 75px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffb337;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  white-space: nowrap;
  width: 100vw;
  @media screen and (max-width: 768px) {
    backdrop-filter: blur(10px);
    background-color: rgba(38, 50, 50, 0.5);
    height: 100vh;
    overflow-y: auto;
    padding-top: 45px;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    flex-direction: column;
    justify-content: center;
  }

  ul {
    display: flex;
    list-style-type: none;
    height: 100%;
    padding: 1rem 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: space-evenly;
    }
    @media screen and (max-height: 450px) {
      flex-direction: row;
      justify-content: space-evenly;
    }

    li {
      margin: 0 auto;
      @media screen and (max-width: 768px) and (orientation: portrait) {
        /* height: 10%; */
      }
      a {
        transition: all 0.2s ease;
        &:hover {
          text-shadow: 0 0 10px #ffb337;
          transform: scale(1.03);
        }
      }
    }
  }
`;

export const MainLogo = styled(Link)`
  position: absolute;
  top: 0.3rem;
  left: 1rem;
  display: flex;
  z-index: 15;
  transform: scale(1);
  transition: transform 0.5s ease-in-out, left 0.5s ease-in-out;
`;

export const LogoP = styled.p`
  z-index: 10;
  position: fixed;
  font-family: 'Barlow Condensed';
  top: 50px;
  left: 15px;
  font-size: 1.03rem;
  text-shadow: 0 0 10px black;
  user-select: none;
  -webkit-user-select: none;
  transition: opacity 0.5s ease-in-out;
  letter-spacing: 0.1rem;
  animation: fade-in 0.5s ease-in-out;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
