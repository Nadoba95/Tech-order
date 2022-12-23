import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

function Backdrop({ onCloseCart }) {
  return <div className={classes.backdrop} onClick={onCloseCart} />;
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.querySelector("#overlays");

function Modal({ children, onCloseCart }) {
  return (
    <>
      {createPortal(<Backdrop onCloseCart={onCloseCart} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;
