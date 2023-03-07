import styled from 'styled-components';

export const H2Div = styled.div`
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
`;
