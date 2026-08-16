import styles from './ProductCard.module.css';
import { CiHeart } from 'react-icons/ci';

function ProductCard({ products, variant }) {
  return (
    <li className={`${styles.card} ${variant ? styles[variant] : ''}`}>
      <img src={products.images[0]} alt="제품 사진" className={styles.image} />
      <p className={styles.description}>
        {products.description ?? '상품 설명'}
      </p>
      <p className={styles.price}>
        {Number(products.price).toLocaleString() ?? 0}원
      </p>
      <div className={styles.favoriteCount}>
        <CiHeart />
        <p>{products.favoriteCount ?? 0}</p>
      </div>
    </li>
  );
}
export default ProductCard;
