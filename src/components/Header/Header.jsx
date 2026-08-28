import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ children }) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/images/logo.png" alt="판다 마켓 로고 이미지" />
      </Link>

      {children}
      <Link to="#" className={styles.logInButton}>
        로그인
      </Link>
    </header>
  );
}
export default Header;
