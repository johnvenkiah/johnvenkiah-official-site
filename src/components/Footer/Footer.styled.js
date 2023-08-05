import styled from 'styled-components';

export const Footer = styled.div`
  z-index: 15;
  width: 100%;
  height: 2vh;
  margin-top: 2rem;
  display: flex;
  bottom: 0;
  left: 0;
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
  small {
    margin: 0 auto;
    text-align: center;
    @media screen and (min-width: 769px) {
      position: absolute;
      left: 2rem;
    }
  }
  p {
    margin: 0 auto;
    text-align: center;
    @media screen and (max-width: 450px) {
      margin-top: 0.3rem;
    }
  }
`;
