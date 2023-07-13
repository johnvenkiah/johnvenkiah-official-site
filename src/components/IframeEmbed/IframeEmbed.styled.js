import styled from 'styled-components';

export const ResponsiveVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  border-radius: 8px;
  transition: all 0.5s cubic-bezier(0.69, 0.07, 0.19, 0.88);
  filter: opacity(85%) grayscale(75%) contrast(125%) blur(2px);
  &:hover {
    box-shadow: 0 0 25px #000;
    /* border: 1.5px solid orange; */
    transform: scale(1.005);
    filter: none;
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

  h3 {
    margin: 0.8rem 0 0;
  }
  p {
    margin: 0.2rem 0;
  }
`;
