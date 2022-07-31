import React from 'react'
import {BsCart} from "react-icons/bs";
import styles from "./cart.module.css";
function Cart() {
  return (
    <div className={styles.cart}>
        <BsCart size={"30px"}/>
        <div className={styles.cartCount}>9</div>
    </div>
  )
}

export default Cart