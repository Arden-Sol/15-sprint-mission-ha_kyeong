import styles from './Nav.module.css';

function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <a href="#">자유 게시판</a>
        <a href="#">중고마켓</a>
      </nav>
    </>
  );
}
export default Nav;
// 네브의 스타일 수정
