import { ProductCard } from '../ProductCard';

function ProductsCardList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard products={product} />
        </li>
      ))}
    </ul>
  );
}
export default ProductsCardList;
