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
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
`;

export const Italics = styled.p`
  font-style: italic;
`;
