import React from 'react'
import styles from "./spinner.module.css";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
function Spinner() {
  return (
    <>
      <div className={styles.spinner}>
        <AiOutlineLoading3Quarters fontSize={"20px"}/>
      </div>
    </>
  )
}

export default Spinner