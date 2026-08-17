import { useEffect, useState } from 'react';

const INITIAL_PAGE = 1;

function usePagination() {
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [totalProducts, setTotalProducts] = useState(0);
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const goToPage = (selectPage) => {
    setCurrentPage(selectPage);
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 375px)');
    const tabletQuery = window.matchMedia('(max-width: 768px)');

    const handleChange = () => {
      if (mobileQuery.matches) {
        setProductsPerPage(4);
      } else if (tabletQuery.matches) {
        setProductsPerPage(6);
      } else {
        setProductsPerPage(10);
      }
    };

    handleChange();

    mobileQuery.addEventListener('change', handleChange);
    tabletQuery.addEventListener('change', handleChange);

    return () => {
      mobileQuery.removeEventListener('change', handleChange);
      tabletQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const value = {
    currentPage,
    setTotalProducts,
    totalPages,
    goToPage,
    productsPerPage,
  };

  return value;
}

export default usePagination;
