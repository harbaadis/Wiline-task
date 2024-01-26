import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 12px;
  }

  button {
    background-color: #61dafb;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #4fa3d1;
    }
  }
`;