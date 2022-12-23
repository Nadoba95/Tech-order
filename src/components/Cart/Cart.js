import { useCartContext } from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart({ onCloseCart }) {
  const { items, totalAmount, addItem, removeItem } = useCartContext();

  const decimalTotalAmount = `$${totalAmount.toFixed(2)}`;
  const cartIsEmpty = items.length === 0;

  function cartItemAddHandler(item) {
    addItem({ ...item, amount: 1 });
  }

  function cartItemRemoveHandler(id) {
    removeItem(id);
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

  return (
    <Modal onCloseCart={onCloseCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{decimalTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        {!cartIsEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
