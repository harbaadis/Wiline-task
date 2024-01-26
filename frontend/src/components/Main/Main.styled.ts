// Inside Main.styled.ts
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .input-container {
    margin-bottom: 30px;
    text-align: center;

    label {
      margin-bottom: 12px;
    }

    textarea {
      width: 520px; /* Adjusted width by 30% */
      height: 30px;
      resize: vertical;
      padding: 8px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      transition: border 0.3s ease-in-out;
      font-family: 'Arial', sans-serif;
      font-weight: bold;

      &:focus {
        border-color: #61dafb;
      }
    }
  }

  .output-container {
    width: 520px; /* Adjusted width by 30% */
    text-align: left;
    margin-bottom: 30px;

    h2 {
      margin-bottom: 12px;
    }
  }
`;

export const OutputListWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 5px 0;
    border-radius: 4px;
    background-color: #f9f9f9;
  }

  strong {
    color: #007bff;
  }
`;
