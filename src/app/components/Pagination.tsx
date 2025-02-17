'use client';

import { useStore } from '../store/useStore';

interface PaginationProps {
  totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const { page, setPage } = useStore();  // Get page and setPage from the store

  console.log('Current page:', page);  // Debugging: Check if page state changes

  const handlePageChange = (newPage: number) => {
    console.log('Changing page to:', newPage);  // Debugging
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);  // Update page in the store
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span className="pagination-info">
        Page {page} of {totalPages}
      </span>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        Next
      </button>

      {totalPages > 5 && page > 3 && (
        <>
          <button onClick={() => handlePageChange(1)}>1</button>
          <span>...</span>
        </>
      )}

      {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
        const pageNumber = Math.max(1, Math.min(totalPages, page - 2 + i));
        return (
          <button
            key={i}
            onClick={() => handlePageChange(pageNumber)}
            className={pageNumber === page ? 'active' : ''}
          >
            {pageNumber}
          </button>
        );
      })}

      {totalPages > 5 && page < totalPages - 2 && (
        <>
          <span>...</span>
          <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
        </>
      )}
    </div>
  );
};