import { ProductsCardList } from './components/ProductsCardList';
import { PaginationButton } from './components/PaginationButton';
import { useState } from 'react';

import { Header } from './components/Header';
import { Nav } from './components/Header/Nav';
import { Footer } from './components/Footer';
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

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main className={styles.main}>
        {/* 타이틀 */}
        <div id="productsTitle" className={styles.productsHeader}>
          <h1 className={styles.productsTitle}>판매 중인 상품</h1>
          <div className={styles.searchInput}>
            <CiSearch />
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          <button className={styles.addProductButton}>상품 등록하기</button>
          <div className={styles.sortDropdown}>
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

        {/* 페이지네이션 */}
        <ProductsCardList products={productsToShow} />
        <PaginationButton
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={goToPage}
        />
      </main>
      <Footer />
    </>
  );
}
export default App;
