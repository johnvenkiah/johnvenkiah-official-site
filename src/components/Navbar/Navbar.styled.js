import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #555;
  height: 85px;
  display: flex;
  justify-content: space-between;
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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100vw;
  white-space: nowrap;
  background-color: rgba(25, 50, 50, 0.5);
  backdrop-filter: blur(10px);
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
