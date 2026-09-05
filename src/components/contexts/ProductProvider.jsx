import { useEffect, useState } from 'react';
import { ProductContext } from './ProductContext.jsx';
import { productApi } from '../api/productApi.js';
import usePagination from '../hooks/usePagination.js';

function ProductProvider({ children }) {
  const {
    currentPage,
    setTotalProducts,
    totalPages,
    goToPage,
    productsPerPage,
  } = usePagination();

  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState('desc');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductsList = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const { list, totalCount } = await productApi.get({
          offset: (currentPage - 1) * productsPerPage,
          limit: productsPerPage,
          keyword: keyword,
          sort: sort,
        });
        setProducts(list);
        setTotalProducts(totalCount);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProductsList();
  }, [currentPage, productsPerPage, setTotalProducts, keyword, sort]);

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  const value = {
    products,
    totalPages,
    goToPage,
    currentPage,
    setSort,
    setKeyword,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
export default ProductProvider;
