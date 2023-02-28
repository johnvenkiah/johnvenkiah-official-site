// Burger.styled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBurger = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 27px;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ theme }) => theme.primaryLight};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    }
  }
`;

export const MainLogo = styled(Link)`
  position: absolute;
  top: 0.5rem;
  left: 1.5rem;
  display: flex;
  color: ${({ theme }) => theme.primaryLight};
  text-decoration: none;
  z-index: 10;
`;
