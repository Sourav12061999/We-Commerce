import React from 'react'
import styles from "./slider.module.css";
function PriceSlider() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
           <input type="number" value={0}/>
           <input type="number" value={4000}/>
        </div>
        <button>Filter</button>
    </div>
  )
}

export default PriceSlider