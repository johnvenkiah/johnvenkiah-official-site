// Burger.styled.js
import styled from 'styled-components';

export const StyledBurger = styled.button`
  display: none;

  @media screen and (max-width: 855px) {
    display: flex;
    position: fixed;
    top: 24px;
    right: 1.5rem;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 15;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.12rem;
      background: ${({ theme }) => theme.primaryLight};
      border-radius: 10px;
      transition: all 0.5s ease-in-out;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
        transform: ${({ open }) =>
          open ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;
