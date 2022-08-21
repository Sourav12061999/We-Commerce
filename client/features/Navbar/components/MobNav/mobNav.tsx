import React from "react";
import styles from "./mobNav.module.css";
import { IoReorderThree } from "react-icons/io5";
import Auth from "../auth/auth";
function MobNav() {
  const isSignedin = false;
  return (
    <div className={styles.main}>
      <div className={styles.burger}>
        <IoReorderThree size={"50px"} />
      </div>
      <div className={styles.logo}>We-Comm</div>
      <div className={styles.left}>
        <Auth/>
      </div>
    </div>
  );
}

export default MobNav;
