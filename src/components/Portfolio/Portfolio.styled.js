import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 850px;
  justify-content: center;
  p {
    max-width: 700px;
    margin: 20px auto;
    text-align: center;
    a {
      color: #ffb337;
      transition: all 0.3s ease-in-out;
      @media (hover: hover) {
        &:hover {
          text-shadow: 0 0 10px #ffb337;
        }
      }
      @media (hover: none) {
        &:active {
          text-shadow: 0 0 10px #ffb337;
        }
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0;
    li {
      width: 50%;
      text-align: center;
      margin: 0 auto;
      list-style-type: none;
      font-weight: bold;
      color: #ffb337;
    }
  }
`;

export const PortfolioItem = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 10px;
  padding: 10px;
  border: 1.5px solid transparent;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    transform: scale(1.03);
    background-color: rgba(38, 50, 50, 0.5);
    border: 1px solid #ffb337;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 10px #ffb33780;
  }
`;

export const PortfolioImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
`;
