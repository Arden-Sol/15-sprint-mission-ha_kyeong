import logoImage from './images/logo.png';
import { ProductsCardList } from './components/ProductsCardList';

function App() {
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
            <ProductsCardList />
          </div>
        </section>
        <section id="productsContainer">
          <div id="productsTitle">
            <h1>판매 중인 상품</h1>
            <input type="text" />
            <button>상품 등록하기</button>
            <select>
              <option value="좋아요">좋아요순</option>
              <option value="최신">최신순</option>
            </select>
          </div>
          <ProductsCardList />
          <button id="paginationButton">페이지 버튼</button>
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
