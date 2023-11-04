import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
  left: 50%;
  padding: 9rem;
  transform: translate(-50%);
  z-index: 11;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 450px) {
    padding: 2rem;
  }
  h1 {
    font-size: 2.5rem;
    margin: 1rem auto;
  }
  h2 {
    font-size: 1.5rem;
    margin: 0 auto;
  }
  p {
    margin: 2rem auto;
  }
  a {
    cursor: pointer;
    width: fit-content;
    margin: 0 auto;
    padding-bottom: 1rem;
    text-align: center;
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;
    transform: scale(1);

    @media (hover: hover) {
      &:hover {
        transform: scale(1.03);
        text-shadow: 0 0 10px #ffb337;
      }
    }
    @media (hover: none) {
      &:active {
        transform: scale(1.03);
        text-shadow: 0 0 10px #ffb337;
      }
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 25%;
  background-color: #0d0c1d;
  z-index: 9;
`;

export const RedCenteredCircle = styled.div`
  position: fixed;
  top: 25%;
  justify-content: center;
  align-items: center;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 50%;
  left: 50%;
  transform: translate(-50%);
  height: 50%;
  margin: 0 auto;
  text-align: center;
  background: radial-gradient(#822, transparent 50%, transparent);
  border-radius: 50%;
  opacity: 1;
  transition: opacity 0.9s ease-in-out;
`;
