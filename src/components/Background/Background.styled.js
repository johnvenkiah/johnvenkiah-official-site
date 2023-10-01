import styled from 'styled-components';

export const BackgroundImg = styled.img`
  border: 0;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  object-fit: cover;
  position: fixed;
  z-index: -1;
  transition-property: height, min-height;
  transition-duration: 0.1s;
  transition-delay: 0.1s;
  transition-timing-function: ease-in-out;
`;
