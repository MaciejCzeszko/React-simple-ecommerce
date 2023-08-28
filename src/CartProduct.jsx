export function CartProduct({ item, cartProducts, setCartProducts }) {
  function handleInput(id, e) {
    setCartProducts((prev) => ({ ...prev, [id - 1]: Number(e) }));
  }

  return (
    <li className="product-item">
      <img src={item.image} alt="product image" />
      <span>{item.title}</span>
      <span>
        Total value of{" "}
        <input
          type="number"
          value={cartProducts[item.id - 1]}
          onChange={(e) => handleInput(item.id, e.target.value)}
        />{" "}
        items: {item.price * cartProducts[item.id - 1]}zł
      </span>
    </li>
  );
}
