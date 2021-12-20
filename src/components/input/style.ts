import styled from "styled-components";

export const FormContainer = styled.div`
  form {
    background: var(--gray-50);
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 40px 70px;
    border-radius: 10px;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 8px;
    width: 250px;
    &:focus {
      color: #fff;
      font-weight: 600;
      border-bottom: 2px solid;
      transition: all 0.2s ease-in;
      transform: scaleX(1.03);
      opacity: 6;
      background-color: #4f646f;
      ::placeholder {
        color: #c0c5c1;
        transform: scaleX(0.94);
      }
    }
  }

  label {
    color: #fff;
    display: block;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin: 5px;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
