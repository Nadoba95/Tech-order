import { useState } from "react";
import { useCartContext } from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart({ onCloseCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { items, totalAmount, addItem, removeItem, clearCart } =
    useCartContext();

  const decimalTotalAmount = `$${totalAmount.toFixed(2)}`;
  const cartIsEmpty = items.length === 0;

  function cartItemAddHandler(item) {
    addItem({ ...item, amount: 1 });
  }

  function cartItemRemoveHandler(id) {
    removeItem(id);
  }

  function orderHandler() {
    setIsCheckout(true);
  }

  function submitHandler() {
    setIsSubmitted(true);
    clearCart();
  }

  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  const modalItems = (
    <>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{decimalTotalAmount}</span>
      </div>
    </>
  );

  const modalActions = !isCheckout && (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onCloseCart}>
        Close
      </button>
      {!cartIsEmpty && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const didSubmitContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onCloseCart={onCloseCart}>
      {!isCheckout && !isSubmitted && modalItems}
      {isCheckout && !isSubmitted && (
        <Checkout onCancel={onCloseCart} onSubmit={submitHandler} />
      )}
      {!isCheckout && !isSubmitted && modalActions}
      {isSubmitted && didSubmitContent}
    </Modal>
  );
}

export default Cart;
