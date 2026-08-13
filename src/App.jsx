import logoImage from './images/logo.png';
import { ProductsCardList } from './components/ProductsCardList';
import { getProducts } from './components/api/productApi';
import { PaginationButton } from './components/PaginationButton';
import { useEffect, useState } from 'react';

const INITIAL_PAGE = 1;
const PRODUCTS_PER_PAGE = 10;

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

  return (
    <>
      <header>
        <a href="/">
          <img src={logoImage} alt="판다 마켓 로고 이미지" />
        </a>

        <nav>
          <a href="#">자유 게시판</a>
          <a href="#">중고마켓</a>
        </nav>
        <a href="#">로그인</a>
      </header>

      <main>
        <section id="bestProductsContainer">
          <h1>베스트 상품</h1>
          <div id="bestProducts">
            {/* <ProductsCardList /> */}
            <div></div>
          </div>
        </section>
        <section id="productsContainer">
          <div id="productsTitle">
            <h1>판매 중인 상품</h1>
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button>상품 등록하기</button>
            <select onChange={(e) => sortedProducts(e.target.value)}>
              <option value="createdAt">최신순</option>
              <option value="favoriteCount">좋아요순</option>
            </select>
          </div>
          <ProductsCardList products={productsToShow} />
          <PaginationButton
            totalPages={totalPages}
            currentPage={currentPage}
            goToPage={goToPage}
          />
        </section>
      </main>

      <footer>
        <div>codeit - 2024</div>
        <div>Privacy Policy FAQ</div>
        <div>
          <a href="#">페이스북</a>
          <a href="#">트위터</a>
          <a href="#">유튜브</a>
          <a href="#">인스타그램</a>
        </div>
      </footer>
    </>
  );
}

export default App;
