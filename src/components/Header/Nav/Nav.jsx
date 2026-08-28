import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav({ classNameAdd }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="#">자유게시판</Link>
        <Link to="/Items" className={styles[classNameAdd]}>
          중고마켓
        </Link>
      </nav>
    </>
  );
}
export default Nav;
