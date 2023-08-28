import { Product } from "./Product";

export function ProductList({ products, onAddToCart }) {
  return (
    <ul>
      {products.map((product) => {
        return (
          <Product
            product={product}
            onAddToCart={onAddToCart}
            key={product.id}
          />
        );
      })}
    </ul>
  );
}
