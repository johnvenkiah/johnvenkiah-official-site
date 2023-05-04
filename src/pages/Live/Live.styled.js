import styled from 'styled-components';

export const Concerts = styled.div`
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
`;

export const ListGroup = styled.div`
  padding: 10px;

  a,
  p {
    display: block;
    padding: 7px;
    color: $mainLightColor;
    background-color: rgba(38, 50, 50, 0.5);
    box-shadow: 0 0 1rem 0 #000;
    backdrop-filter: blur(10px);
    margin: 0.6rem auto;
    border: 0.5px solid transparent;
    border-radius: 9px;
    text-align: center;
    @media screen and (min-width: 450px) {
      max-width: 400px;
    }
  }

  a {
    &:hover {
      color: #ffb337;
      background-color: #1a1a1a08;
      box-shadow: 0 0 1rem 0 #8d5a2b;
      border: 0.5px solid orange;
      text-shadow: black 0 0 10px 5px;
    }
  }
`;

export const ListGroupLink = styled.a`
  text-decoration: none;
  transition: all 0.3s ease;
  span {
    display: block;
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
