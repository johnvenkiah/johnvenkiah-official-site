import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  @media screen and (min-width: 1024px) {
    justify-content: end;
    height: 75vh;
  }
  h3 {
    text-align: center;
    font-size: 1.2rem;
    width: 90%;
  }
`;

export const ContactFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem auto;
  width: 90%;
  max-width: 600px;
  padding: 0.5rem;
  box-shadow: 0 0 1rem 0 #000;
  border-radius: 18px;
  border: 0.8px solid #b6b6b666;
  background-color: rgba(38, 50, 50, 0.5);
  backdrop-filter: blur(10px);
  @media screen and (max-width: 420px) {
    margin-top: 0;
    padding-top: 0;
  }

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

    input:-webkit-autofill,
    input:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 1000px #1129 inset;
      -webkit-text-fill-color: #fff;
    }

    textarea {
      resize: none;
      height: 105px;
      @media screen and (min-width: 768px) {
        height: 150px;
      }
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
      @media screen and (min-width: 768px) {
        width: 250px;
        margin: 0 auto;
      }
      @media (hover: hover) {
        &:hover {
          color: #ffb337;
          background-color: #1a1a1a08;
          box-shadow: 0 0 1rem 0 #8d5a2b;
          border: 0.1rem solid orange;
          text-shadow: black 0 0 10px 5px;
        }
      }
      @media (hover: none) {
        &:active {
          color: #ffb337;
          background-color: #1a1a1a08;
          box-shadow: 0 0 1rem 0 #8d5a2b;
          border: 0.1rem solid orange;
          text-shadow: black 0 0 10px 5px;
        }
      }
    }

    > div {
      padding-bottom: 0;
      background-color: transparent !important;
      border: none;
      margin: 5px auto 0;
      width: 100%;
      right: 0.4rem;
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
  width: 80vw;
  height: 11%;
  max-height: 3.5rem;
  font-weight: 600;
  margin: 5px auto;
  text-align: center;
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
  backdrop-filter: blur(10px);
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  @media screen and (min-width: 768px) {
    width: fit-content;
    padding: 0.5rem 1.5rem;
    margin: 0 auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3% auto 5%;
  flex-wrap: wrap;
  width: 95%;
  max-width: 600px;
  button {
    width: 45%;
    margin: 2%;
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
    @media screen and (min-width: 768px) {
      width: 250px;
      margin: 0 auto;
    }
    @media (hover: hover) {
      &:hover {
        color: #ffb337;
        background-color: #1a1a1a08;
        box-shadow: 0 0 1rem 0 #8d5a2b;
        border: 0.1rem solid orange;
        text-shadow: black 0 0 10px 5px;
      }
    }
    @media (hover: none) {
      &:active {
        color: #ffb337;
        background-color: #1a1a1a08;
        box-shadow: 0 0 1rem 0 #8d5a2b;
        border: 0.1rem solid orange;
        text-shadow: black 0 0 10px 5px;
      }
    }
  }
`;
