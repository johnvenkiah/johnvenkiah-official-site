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

  div {
    cursor: pointer;
    width: fit-content;
    margin: 0 auto;

    h2 {
      transition: all 0.3s ease-in-out;
      margin: 0 auto;
    }

    svg {
      transition: all 0.3s ease-in-out;
      font-size: 1.5rem;
      border-radius: 50%;
    }

    &:hover {
      h2 {
        text-shadow: 0 0 10px #ffb337;
      }
      svg {
        filter: drop-shadow(0px 0px 5px #ffb337);
        -webkit-filter: drop-shadow(0px 0px 5px #ffb337);
      }
    }
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 75vh;
  padding: 0 1rem;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ScrollElement = styled.div`
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

  p,
  h2 {
    font-size: 24px;
    margin: 0;
    padding: 0 0;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
  }
  svg {
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    transform: scale(1.03);
    p {
      text-shadow: 0 0 10px #ffb337;
    }
    svg {
      filter: drop-shadow(0px 0px 5px #ffb337);
      -webkit-filter: drop-shadow(0px 0px 5px #ffb337);
    }
  }
`;
