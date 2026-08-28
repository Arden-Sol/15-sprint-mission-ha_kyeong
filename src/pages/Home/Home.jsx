import Header from '@/components/Header/Header.jsx';
import Footer from '@/components/Footer/Footer.jsx';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <section className={styles.mainVisual}>
          <div className={styles.inner2}>
            <div className={styles.mainTitle}>
              <h1>
                <span>일상의 모든 물건을 </span>
                <span>거래해 보세요</span>
              </h1>
              <Link to="/Items" className={styles.searchBtn}>
                구경하러 가기
              </Link>
            </div>
            <img
              className={styles.mainVisualImg}
              src="/images/home/img_home_top.png"
              alt="판다마켓 메인 배너"
            />
          </div>
        </section>
        <section>
          <div className={`${styles.inner3} ${styles.inner3first}`}>
            <img
              src="/images/home/img_home_01.png"
              alt="인기 상품을 확인해 보세요"
            />
            <div className={styles.content}>
              <p className={styles.hotItem}>Hot item</p>
              <h1 className={styles.contentTitle}>
                <span>인기 상품을 </span>
                <span>확인해 보세요</span>
              </h1>
              <p className={styles.description}>
                <span>가장 HOT한 중고거래 물품을 </span>
                <span>판다 마켓에서 확인해 보세요</span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.inner3} ${styles.reverseContent}`}>
            <img src="/images/home/img_home_02.png" alt="상품을 검색하세요" />
            <div className={styles.content}>
              <p className={styles.hotItem}>Search</p>
              <h1 className={styles.contentTitle}>
                <span>구매를 원하는 </span>
                <span>상품을 검색하세요</span>
              </h1>
              <p className={styles.description}>
                <span>구매하고 싶은 물품은 검색에서 </span>
                <span>쉽게 찾아보세요</span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.inner3}>
            <img src="/images/home/img_home_03.png" alt="상품을 등록하세요" />
            <div className={styles.content}>
              <p className={styles.hotItem}>Register</p>
              <h1 className={styles.contentTitle}>
                <span>판매를 원하는 </span>
                <span>상품을 등록하세요</span>
              </h1>
              <p className={styles.description}>
                <span>어떤 물건이든 판매하고 싶은 상품을</span>

                <span>쉽게 등록하세요</span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.bottom}>
          <div className={styles.inner2}>
            <h1 className={styles.contentTitle}>
              <span>믿을 수 있는 </span>
              <span>판다마켓 중고 거래</span>
            </h1>
            <img
              src="/images/home/img_home_bottom.png"
              alt="믿을 수 있는 판다마켓 중고 거래"
            />
          </div>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}
export default Home;
