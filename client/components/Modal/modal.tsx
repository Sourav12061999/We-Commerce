import React, { ReactNode } from "react";
import styles from "./modal.module.css";
import GrayScreen from "../Gray Screen/grayScreen";
import {createPortal} from "react-dom";
interface PropTypes {
  children: ReactNode;
  index?:number;
  setShowModal:Function;
}
function Modal({ children,setShowModal }: PropTypes) {
  return createPortal(
    <GrayScreen clickHandler={() => setShowModal(null)}>
      <div className={styles.modal}>{children}</div>
    </GrayScreen>,
    document.getElementById("portal")!
  );
}

export default Modal;
