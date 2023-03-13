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
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffb337;
    pointer-events: none;
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
    background-color: rgba(25, 50, 50, 0.5);
  }

  ul {
    display: flex;
    list-style-type: none;
    height: 100%;
    padding: 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: space-evenly;
    }

    li {
      margin: 0 auto;
      a {
        transition: all 0.2s ease;
        &:hover {
          text-shadow: 0 0 10px #ffb337;
          transform: scale(1.03);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding-top: 85px;
  }
`;
