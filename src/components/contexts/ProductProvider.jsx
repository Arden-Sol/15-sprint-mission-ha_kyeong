import { useEffect, useState } from 'react';
import { ProductContext } from './ProductContext.jsx';
import { getProducts } from '../api/productApi.js';
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

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductsList = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const { list, totalCount } = await getProducts({
          page: currentPage,
          pageSize: productsPerPage,
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
  }, [currentPage, productsPerPage, setTotalProducts]);

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
    setProducts,
    currentPage,
    productsPerPage,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
export default ProductProvider;
