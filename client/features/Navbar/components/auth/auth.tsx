import React from 'react'
import Cart from "../Cart/cart";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import styles from "./auth.module.css";
function Auth() {
    const isSignedin=true;
  return (
    <>
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
    </>
  )
}

export default Auth