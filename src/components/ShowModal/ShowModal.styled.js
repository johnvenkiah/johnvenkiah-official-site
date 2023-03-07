import styled from 'styled-components';

export const IntroModal = styled.div`
  background: radial-gradient(rgba(0, 0, 0, 0.3), black);
  height: calc(100vh - 3rem);
  width: calc(100vw - 3rem);
  display: ${({ close }) => (close ? 'flex' : 'none')};
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  z-index: 24;
  border-radius: 0.3rem;

  p {
    font-weight: bold;
    font-size: 1rem;
    font-style: italic;
    padding: 0 1rem;
  }
`;
