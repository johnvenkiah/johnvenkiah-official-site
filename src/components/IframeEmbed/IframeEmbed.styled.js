import styled from 'styled-components';

export const ResponsiveVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 8px;
  }
`;

export const VideoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 2rem;

  h3 {
    margin: 0.8rem 0 0;
  }
  p {
    margin: 0.2rem 0;
  }
`;
