import styled from 'styled-components';

export const IntroModal = styled.div`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  p {
    font-weight: bold;
    font-size: 1rem;
    font-style: italic;
    padding: 0 1rem;
    color: #000;
  }

  div {
    position: absolute;
    top: 50%;
    width: 30%;
    background: #fff;
    text-align: center;
    transform: translateY(-50%);
    padding: 2rem;
    border-radius: 18px;
    box-shadow: 0 0 1rem 0 #ccc;
    min-height: 200px;
    display: inherit;
    justify-content: center;
    align-items: center;
  }
`;
