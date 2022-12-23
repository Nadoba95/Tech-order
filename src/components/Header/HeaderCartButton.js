import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useCartContext } from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton({ onShowCart }) {
  const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);
  const { items } = useCartContext();

  const numberOfCartItems = items.reduce((acc, item) => acc + item.amount, 0);

  const buttonClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={onShowCart} type="button">
      <FaCartPlus className={classes.icon} />
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
