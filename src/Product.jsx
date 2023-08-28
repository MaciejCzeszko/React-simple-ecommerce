export function Product({ product, onAddToCart }) {
  return (
    <li className="product-item">
      <img src={product.image} alt="product image" />
      <span>{product.title}</span>
      <div>
        <span>{product.price}zł</span>
        <button onClick={() => onAddToCart(product.id)}>Add to cart</button>
      </div>
    </li>
  );
}
