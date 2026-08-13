function ProductCard({ products }) {
  console.log(products);
  return (
    <>
      <img src={products.images} alt="제품 사진" />
      <p>{products.description}</p>
      <p>{products.price}원</p>
      <div>
        <img src="#" alt="아이콘" />
        <p>{products.favoriteCount}</p>
      </div>
    </>
  );
}
export default ProductCard;
