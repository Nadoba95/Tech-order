import { useState } from "react";
import Header from "./components/Header/Header";
import Techs from "./components/Techs/Techs";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/cart-context";

import "./App.css";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  function closeCartHandler() {
    setIsCartShown(false);
  }

  function openCartHandler() {
    setIsCartShown(true);
  }

  return (
    <CartContextProvider>
      {isCartShown && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={openCartHandler} />;
      <main>
        <Techs />
      </main>
    </CartContextProvider>
  );
}

export default App;
