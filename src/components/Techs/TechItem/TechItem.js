import TechItemForm from "./TechItemForm";
import { useCartContext } from "../../../store/cart-context";

import classes from "./TechItem.module.css";

function TechItem({ name, description, price, id }) {
  const { addItem } = useCartContext();

  const decimalPrice = `$${price.toFixed(2)}`;

  function addItemToCartHandler(amount) {
    addItem({
      id,
      name,
      amount,
      price,
    });
  }

  return (
    <li className={classes.tech}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{decimalPrice}</div>
      </div>
      <div>
        <TechItemForm id={id} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
}

export default TechItem;
