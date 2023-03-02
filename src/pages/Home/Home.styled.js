import styled from 'styled-components';
// import {
//   IoIosArrowDown as ArrowDown,
//   IoIosArrowUp as ArrowUp,
// } from 'react-icons/io';

export const MiddleFadeBar = styled.div`
  width: 100%;
  text-align: center;
  height: 25vh;
  position: relative;
  top: 75vh;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  h2 {
    margin: 0 auto;
  }
  svg {
    font-size: 1.5rem;
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 75vh;
  padding: 0 1rem;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ToTop = styled.div`
  margin: 0 auto;
  text-align: center;
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 1.5rem;

  p {
    margin: 0;
    padding-bottom: 1rem;
  }
  svg {
    font-size: 1.5rem;
  }
`;
