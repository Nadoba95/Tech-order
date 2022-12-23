import { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./TechItemForm.module.css";

function TechItemForm({ id, onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter valid amount (1-5)</p>}
    </form>
  );
}

export default TechItemForm;
