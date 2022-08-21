import React from 'react'
import styles from "./style.module.css";
function FilterFooter() {
  return (
    <div className={styles.main}>
      <button>Brand</button>
      <button>Category</button>
      <button>Price</button>
    </div>
  )
}

export default FilterFooter