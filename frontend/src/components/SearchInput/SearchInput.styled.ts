import styled from 'styled-components';

export const InputWrapper = styled.div`
  text-align: center;

  label {
    margin-bottom: 12px;
  }

  input {
    width: 300px;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
    transition: border 0.3s ease-in-out;

    &:focus {
      border-color: #61dafb;
    }
  }

  button {
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
  }

  div {
    text-align: left;
    margin-top: 20px;

    h2 {
      margin-bottom: 12px;
    }

    pre {
      white-space: pre-wrap;
      padding: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
`;