import styled from 'styled-components';

export const IntroModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  div {
    position: absolute;
    top: 50%;
    width: 30%;
    background-color: rgba(38, 50, 50, 0.5);
    backdrop-filter: blur(10px);
    text-align: center;
    transform: translateY(-50%);
    padding: 2rem;
    border-top: 0.7px solid #8e8e8e66;
    border-right: 0.7px solid #8e8e8e66;
    border-bottom: 0.7px solid #000;
    border-left: 0.7px solid #8e8e8e66;
    border-radius: 18px;
    box-shadow: 0 0 1rem 0 #000;
    min-height: 200px;
    display: inherit;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      width: 80vw;
      height: 75vh;
    }

    button {
      position: absolute;
      top: 0.3rem;
      right: 0.3rem;
      padding: 0.5rem;
      border: none;
      background: transparent;
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }

    p {
      font-weight: bold;
      font-size: 1rem;
      font-style: italic;
      padding: 0 1rem;
    }
  }
`;
