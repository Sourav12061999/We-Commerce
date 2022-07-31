import React from 'react'
import styles from "./mobNav.module.css";
import {IoReorderThree} from "react-icons/io5";
import {VscAccount} from "react-icons/vsc";
import {BsCart} from "react-icons/bs";
import Cart from '../Cart/cart';
function MobNav() {
     const isSignedin=true;
  return (
    <div className={styles.main}>
      <div className={styles.burger}>
        <IoReorderThree size={"50px"}/>
      </div>
      <div className={styles.logo}>
        We-Comm
      </div>
      <div className={styles.left}>
      {
          !isSignedin?(<div className={styles.account}>
            <VscAccount size={"20px"}/>
            <p>Account</p>
         </div>):(
          <>
            <Cart/>
          </>
         )
        }
      </div>
    </div>
  )
}

export default MobNav