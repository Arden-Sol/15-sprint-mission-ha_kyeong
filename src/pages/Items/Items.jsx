import { ProductsCardList } from '@/components/ProductsCardList/';
import { PaginationButton } from '@/components/PaginationButton/';
import { useState } from 'react';

import { Header } from '@/components/Header';
import { Nav } from '@/components/Header/Nav';
import { Footer } from '@/components/Footer';
import styles from './items.module.css';

import { CiSearch } from 'react-icons/ci';
import { FaCaretDown } from 'react-icons/fa';
import { FaSortAmountDown } from 'react-icons/fa';
import { useProductContext } from '@/components/contexts/ProductContext.jsx';
import { Link } from 'react-router-dom';

function Items() {
  const { products, totalPages, goToPage, currentPage, setSort, setKeyword } =
    useProductContext();

  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setKeyword(searchInput.trim());
    }
  };

  return (
    <>
      <Header>
        <Nav classNameAdd="active" />
      </Header>
      <main className={styles.main}>
        <div id="productsTitle" className={styles.productsHeader}>
          <h1 className={styles.productsTitle}>판매 중인 상품</h1>
          <div className={styles.searchInput}>
            <CiSearch />
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              value={searchInput}
              onKeyDown={handleSearch}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>

          <button className={styles.addProductButton}>
            <Link to="/Registration">상품 등록하기</Link>
          </button>

          <div className={styles.sortDropdown}>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="createdAt" className={styles.option}>
                최신순
              </option>
              <option value="favoriteCount" className={styles.option}>
                좋아요순
              </option>
            </select>
            <FaCaretDown className={styles.normalSize} />
            <FaSortAmountDown className={styles.mobileSize} />
          </div>
        </div>

        <ProductsCardList products={products} />
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
export default Items;
