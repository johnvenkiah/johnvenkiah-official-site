import styled from 'styled-components';

export const ContactFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2.5rem;
  width: 90%;
  max-width: 600px;
  padding: 0.5rem;
  box-shadow: 0 0 1rem 0 #000;
  border-radius: 18px;
  border: 0.8px solid #b6b6b666;
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
      border: #77777766 0.1rem solid;
      border-radius: 10px;
      font-size: 1rem;
      font-family: 'Open Sans', sans-serif;
      text-shadow: 0 0 15px black;
      background-color: #1129;
      color: #fffdef;

      ::placeholder {
        color: #878680;
      }

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
      max-height: 3.4rem;
      background-color: #ff880029;
      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      border: #77777766 0.1rem solid;
      border-radius: 12px;
      box-shadow: 0 0 1rem 0 #000;
      text-shadow: 0 0 15px black;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #ffb337;
        background-color: #1a1a1a08;
        box-shadow: 0 0 1rem 0 #8d5a2b;
        border: 0.1rem solid orange;
        text-shadow: black 0 0 10px 5px;
      }
    }

    > div {
      padding-bottom: 0;
      background-color: transparent !important;
      border: none;
      margin: 5px auto 0;
      > div {
        min-height: 60px;
      }
      span {
        line-height: initial;
      }
    }
  }
`;

export const SuccessP = styled.p`
  color: #fff;
  background-color: #355035;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  width: 95%;
  height: 11%;
  font-weight: 600;
  margin: 5px auto;
  border: #77777766 0.1rem solid;
  border-radius: 12px;
  box-shadow: 0 0 1rem 0 #000;
  text-shadow: 0 0 15px black;
  padding: 0.5rem;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 50;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
