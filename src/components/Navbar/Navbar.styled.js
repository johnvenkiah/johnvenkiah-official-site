import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #555;
  height: 85px;
  display: flex;
  justify-content: space-between;
  /* padding: 0.2rem calc((100vw - 1000px) / 2); */
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  white-space: nowrap;
  backdrop-filter: blur(10px);
  background-color: rgba(25, 50, 50, 0.5);
  @media screen and (max-width: 768px) {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding-top: 85px;
  }
`;
