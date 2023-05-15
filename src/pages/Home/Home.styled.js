import { NavLink as Link } from 'react-router-dom';
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
