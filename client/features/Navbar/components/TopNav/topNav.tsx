import React from 'react'
import styles from "./topNav.module.css";
import {BiMobileAlt, BiHelpCircle} from "react-icons/bi";
function TopNav() {
  return (
    <div className={styles.main}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div>
          <BiMobileAlt size={"20px"}/>
          <p>App Download</p>
        </div>
        <div>
          <BiHelpCircle size={"20px"}/>
          <p>Help</p>
        </div>
        <div>

        </div>
      </div>
      <p className={styles.animatedText}>Download the We-Commerce App and Get a ₹250 discount</p>
    </div>
  )
}

export default TopNav