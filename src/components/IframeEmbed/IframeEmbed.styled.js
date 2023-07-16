import styled from 'styled-components';

export const VideoWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    align-items: start;
    justify-content: center;
    width: 35vw;
    margin: 1rem;
  }
`;

export const ResponsiveVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.69, 0.07, 0.19, 0.88);
  box-shadow: 0 0 15px #000;
  &:hover {
    box-shadow: 0 0 25px #000;
    transform: scale(1.007);
    @media screen and (min-width: 1024px) {
      transform: scale(1);
    }
  }

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

export const VideoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 2.5rem;
  max-width: 100%;

  h3 {
    margin: 0.8rem 0 0;
  }
  p {
    margin: 0.2rem 0;
  }
`;
