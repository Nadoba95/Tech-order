import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

function Checkout({ onCancel, onSubmit }) {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  function checkPostalCode(value) {
    console.log(isNaN(+value.trim()));
    return !isNaN(+value.trim()) && value.trim().length === 5;
  }

  function isNotEmpty(value) {
    return value.trim() !== "";
  }

  function submitFormHandler(e) {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = isNotEmpty(enteredName);
    const enteredStreetIsValid = isNotEmpty(enteredStreet);
    const enteredCityIsValid = isNotEmpty(enteredCity);
    const enteredPostalCodeIsValid = checkPostalCode(enteredPostalCode);

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    if (!formIsValid) {
      return;
    }

    onSubmit();
  }

  const nameClasses = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  const streetClasses = `${classes.control} ${
    formValidity.street ? "" : classes.invalid
  }`;
  const postalCodeClasses = `${classes.control} ${
    formValidity.postalCode ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    formValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formValidity.postalCode && (
          <p>Please enter a valid postal code (5 chars).</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
