import logoImage from '../../images/logo.png';
import Nav from './Nav/Nav.jsx';
import styles from './Header.module.css';
function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={logoImage} alt="판다 마켓 로고 이미지" />
      </a>

      <Nav className={styles.nav} />
      <a href="#" className={styles.logInButton}>
        로그인
      </a>
    </header>
  );
}
export default Header;
