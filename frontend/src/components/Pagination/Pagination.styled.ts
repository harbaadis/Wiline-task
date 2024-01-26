// Pagination.styled.ts
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;

  button {
    margin: 0 5px;
    padding: 8px 12px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
  }

  .active {
    background-color: #0056b3;
  }
`;