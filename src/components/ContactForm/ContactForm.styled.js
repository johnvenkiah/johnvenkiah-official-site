import styled from 'styled-components';

export const ContactFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  max-width: 600px;
  padding: 1rem;
  box-shadow: 0 0 1rem 0 #000;
  border-radius: 18px;
  background-color: rgba(38, 50, 50, 0.5);
  backdrop-filter: blur(10px);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Open Sans', sans-serif;

    input,
    textarea {
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
      font-family: 'Open Sans', sans-serif;

      &:focus {
        outline: none;
        border-color: #333;
      }
    }
    textarea {
      resize: none;
      height: 150px;
    }

    button {
      color: #fff;
      font-weight: 600;
      width: 97%;
      max-height: 3.4rem;
      background-color: #ff880029;
      border: #77777766 0.1rem solid;
      border-radius: 12px;
      box-shadow: 0 0 1rem 0 #000;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      font-family: 'Barlow Condensed';
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;

      &:hover {
        background-color: #555;
      }
    }
  }
`;
