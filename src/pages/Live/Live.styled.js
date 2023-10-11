import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Concerts = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    display: block;
    padding: 7px;
    color: $mainLightColor;
    text-decoration: none;
    transition: all 0.3s ease;
    span {
      text-align: center;
    }
  }
  h2 {
    text-align: center;
  }
`;

export const ListGroup = styled.div`
  padding: 10px;

  a,
  p {
    display: block;
    padding: 7px;
    color: $mainLightColor;
    /* background-color: rgba(38, 50, 50, 0.5);
    box-shadow: 0 0 1rem 0 #000; */
    backdrop-filter: blur(0);
    margin: 0.6rem auto;
    border: 0.5px solid transparent;
    border-radius: 9px;
    text-align: center;
    @media screen and (min-width: 450px) {
      max-width: 400px;
    }
  }
`;

export const ListGroupLink = styled.a`
  text-decoration: none;
  transition: all 0.3s ease;
  span {
    display: block;
  }
  @media (hover: hover) {
    &:hover {
      color: #ffb337;
      background-color: #1a1a1a08;
      backdrop-filter: blur(10px);
      box-shadow: 0 0 1rem 0 #8d5a2b;
      border: 0.5px solid orange;
      text-shadow: black 0 0 10px 5px;
    }
  }
  @media (hover: none) {
    &:active {
      color: #ffb337;
      background-color: #1a1a1a08;
      backdrop-filter: blur(10px);
      box-shadow: 0 0 1rem 0 #8d5a2b;
      border: 0.5px solid orange;
      text-shadow: black 0 0 10px 5px;
    }
  }
`;

export const ListGroupP = styled.a``;

export const EventSpanBold = styled.span`
  font-weight: bold;
`;

export const EventSpan = styled.span`
  display: block;
`;

export const EmptyOrLoading = styled.div`
  display: block;
  padding: 7px;
  text-align: center;
`;

export const RegularLink = styled(Link)`
  cursor: pointer;
  margin: 1rem auto 3rem;
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  transform: scale(1);
  @media (hover: hover) {
    &:hover {
      transform: scale(1.02);
      text-shadow: 0 0 10px #ffb337;
    }
  }
  @media (hover: none) {
    &:active {
      transform: scale(1.02);
      text-shadow: 0 0 10px #ffb337;
    }
  }
`;
