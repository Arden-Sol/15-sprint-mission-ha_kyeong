import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCopyright}>&copy; codeit - 2024</div>
      <div className={styles.footerLinks}>
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <ul className={styles.footerSocial}>
        <li>
          <a href="https://www.facebook.com/?locale=ko_KR">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://x.com/home?lang=ko">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/">
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
