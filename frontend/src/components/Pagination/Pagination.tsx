// Pagination.tsx
import React, { FC } from 'react';
import { PaginationWrapper } from './Pagination.styled';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationWrapper>
      {pages.map((page) => (
        <button key={page} onClick={() => onPageChange(page)} className={currentPage === page ? 'active' : ''}>
          {page}
        </button>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
