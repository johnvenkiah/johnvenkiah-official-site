import styled from 'styled-components';

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  em {
    width: 100%;
    padding: 1rem;
    background-color: white;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  margin: 1rem;
  background-color: #55555550;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  border: 1.5px solid #2c2c2c;
  backdrop-filter: blur(5px);
`;

export const Italics = styled.p`
  font-style: italic;
`;

export const AboutImage = styled.img`
  top: 50vh;
  left: 0;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition-property: height, min-height;
  transition-duration: 0.1s;
  transition-delay: 0.1s;
  transition-timing-function: ease-in-out;
  margin: 0 0;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

export const WindowContainer = styled.div`
  position: fixed;
  top: 50vh;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  perspective: 1000px; /* Optional: Adds 3D perspective */
`;

export const WindowContent = styled.div`
  position: relative;
  width: 100%;
  height: 3000px; /* Adjust the height as needed */
  transform-style: preserve-3d; /* Optional: Enables 3D transforms */
`;

export const WindowFrame = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: url('../.../images/jvt2-small.png') no-repeat center center fixed;
  background-size: cover;
  transform: translateZ(0); /* Optional: Applies 3D transform */
`;
