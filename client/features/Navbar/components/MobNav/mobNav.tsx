import React from "react";
import styles from "./mobNav.module.css";
import { IoReorderThree } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import Cart from "../Cart/cart";
import Link from "next/link";
function MobNav() {
  const isSignedin = false;
  return (
    <div className={styles.main}>
      <div className={styles.burger}>
        <IoReorderThree size={"50px"} />
      </div>
      <div className={styles.logo}>We-Comm</div>
      <div className={styles.left}>
        {!isSignedin ? (
          <Link href={"/auth"}>
            <div className={styles.account}>
              <VscAccount size={"20px"} />
              <p>Account</p>
            </div>
          </Link>
        ) : (
          <>
            <Cart />
          </>
        )}
      </div>
    </div>
  );
}

export default MobNav;
