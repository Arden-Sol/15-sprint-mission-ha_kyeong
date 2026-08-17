import { ProductsCardList } from './components/ProductsCardList';
import { getProducts } from './components/api/productApi';
import { PaginationButton } from './components/PaginationButton';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/';
import { Footer } from './components/Footer/';
import styles from './main.module.css';
import { CiSearch } from 'react-icons/ci';
import { FaCaretDown } from 'react-icons/fa';
import { FaSortAmountDown } from 'react-icons/fa';

const INITIAL_PAGE = 1;
const PRODUCTS_PER_PAGE = 4;

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [totalProducts, setTotalProducts] = useState(0);
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const getProductsList = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const { list, totalCount } = await getProducts({
          page: currentPage,
          pageSize: PRODUCTS_PER_PAGE,
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
  }, [currentPage]);

  const sortedProducts = (order) => {
    if (order === 'createdAt') {
      handleSortBynewest(order);
    } else if (order === 'favoriteCount') {
      handleSortByFavorite(order);
    }
  };

  const handleSortBynewest = (order) => {
    setProducts((prev) =>
      prev.toSorted((a, b) => new Date(b[order]) - new Date(a[order])),
    );
  };

  const handleSortByFavorite = (order) => {
    setProducts((prev) => prev.toSorted((a, b) => b[order] - a[order]));
  };

  const searchProduct = products.filter(
    (prev) =>
      prev.name.includes(searchKeyword.trim()) ||
      prev.description.includes(searchKeyword.trim()),
  );

  const goToPage = (selectPage) => {
    setCurrentPage(selectPage);
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>에러가 났습니다.</div>;
  }

  const productsToShow = searchKeyword.trim() === '' ? products : searchProduct;
  const bestProducts = products
    .toSorted((a, b) => b['favoriteCount'] - a['favoriteCount'])
    .slice(0, 4);

  return (
    <>
      <Header />

      <main className={styles.main}>
        <section id="bestProductsContainer">
          <h1 className={styles.bestProductTitle}>베스트 상품</h1>
          <div id="bestProducts">
            <ProductsCardList products={bestProducts} variant="best" />
            <div></div>
          </div>
        </section>
        <section id="productsContainer" className={styles.productsContainer}>
          <div id="productsTitle" className={styles.productsTitle}>
            <h1>판매 중인 상품</h1>
            <div className={styles.input}>
              <CiSearch />
              <input
                type="text"
                placeholder="검색할 상품을 입력해주세요"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </div>
            <button>상품 등록하기</button>
            <div className={styles.select}>
              <FaCaretDown />
              <FaSortAmountDown className={styles.mobileSize} />
              <select onChange={(e) => sortedProducts(e.target.value)}>
                <option value="createdAt" className={styles.option}>
                  최신순
                </option>
                <option value="favoriteCount" className={styles.option}>
                  좋아요순
                </option>
              </select>
            </div>
          </div>
          <ProductsCardList products={productsToShow} />
          <PaginationButton
            totalPages={totalPages}
            currentPage={currentPage}
            goToPage={goToPage}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
