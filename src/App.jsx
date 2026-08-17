import { ProductsCardList } from './components/ProductsCardList';
import { PaginationButton } from './components/PaginationButton';
import { useState } from 'react';
import { Header } from './components/Header/';
import { Footer } from './components/Footer/';
import styles from './main.module.css';
import { CiSearch } from 'react-icons/ci';
import { FaCaretDown } from 'react-icons/fa';
import { FaSortAmountDown } from 'react-icons/fa';
import { useProductContext } from './components/contexts/ProductContext';

function App() {
  const {
    products,
    totalPages,
    goToPage,
    setProducts,
    currentPage,
    productsPerPage,
  } = useProductContext();

  const [searchKeyword, setSearchKeyword] = useState('');

  const sortedProducts = (order) => {
    if (order === 'createdAt') {
      setProducts((prev) =>
        prev.toSorted((a, b) => new Date(b[order]) - new Date(a[order])),
      );
    } else if (order === 'favoriteCount') {
      setProducts((prev) => prev.toSorted((a, b) => b[order] - a[order]));
    }
  };

  const keyword = searchKeyword.trim();
  const searchProduct = products.filter(
    (prev) => prev.name.includes(keyword) || prev.description.includes(keyword),
  );
  const productsToShow = keyword === '' ? products : searchProduct;

  const bestProductsNumber = Number(productsPerPage) / 2 - 1;
  const bestProducts = products
    .toSorted((a, b) => b['favoriteCount'] - a['favoriteCount'])
    .slice(0, bestProductsNumber);

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
