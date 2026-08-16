import styles from './ProductCardList.module.css';
import { ProductCard } from '../ProductCard';

function ProductsCardList({ products, variant }) {
  return (
    <ul className={`${styles.cardList} ${variant ? styles[variant] : ''}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          products={product}
          variant={variant}
        ></ProductCard>
      ))}
    </ul>
  );
}
export default ProductsCardList;
