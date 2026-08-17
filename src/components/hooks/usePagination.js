import { useState } from 'react';

function usePagination() {
  const INITIAL_PAGE = 1;
  const PRODUCTS_PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [totalProducts, setTotalProducts] = useState(0);
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  const goToPage = (selectPage) => {
    setCurrentPage(selectPage);
  };

  const value = {
    currentPage,
    setTotalProducts,
    totalPages,
    goToPage,
    PRODUCTS_PER_PAGE,
  };

  return value;
}

export default usePagination;
