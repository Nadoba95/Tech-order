import HeaderCartButton from "./HeaderCartButton";

import techImg from "../../assets/tech-img.jpg";
import classes from "./Header.module.css";

function Header({ onShowCart }) {
  return (
    <>
      <header className={classes.header}>
        <h1>Tech order</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={classes["img-wrapper"]}>
        <img src={techImg} alt="techs" />
      </div>
    </>
  );
}

export default Header;
