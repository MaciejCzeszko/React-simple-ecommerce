import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { ProductList } from "./ProductList";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
  });

  function handleAddToCart(id) {
    setCartProducts((prev) => ({ ...prev, [id - 1]: prev[id - 1] + 1 }));
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              products={products}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
