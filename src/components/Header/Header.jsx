import styles from './Header.module.css';

function Header({ children }) {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src="/images/logo.png" alt="판다 마켓 로고 이미지" />
      </a>

      {children}
      <a href="#" className={styles.logInButton}>
        로그인
      </a>
    </header>
  );
}
export default Header;
