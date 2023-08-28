import { CartProduct } from "./CartProduct";

export function Cart({ cartProducts, products, setCartProducts }) {
  let cart = [];
  for (const i in cartProducts) {
    if (cartProducts[i - 1] > 0) {
      cart.push(i - 1);
    }
  }
  let totalPrice = 0;
  cart.map((cartProduct) => {
    return products.map((product) => {
      if (Number(product.id) === Number(cartProduct) + 1)
        totalPrice +=
          products[cartProduct].price * cartProducts[product.id - 1];
    });
  });

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cart.map((cartProduct) => {
          return products.map((product) => {
            if (Number(product.id) === Number(cartProduct) + 1)
              return (
                <CartProduct
                  key={product.id}
                  item={product}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                />
              );
          });
        })}
      </ul>
      <h3>Total price: {totalPrice.toFixed(2)} zł</h3>
    </>
  );
}
