import React from 'react'
import styles from "./style.module.css";

interface PropTypes{
  setShowModal:(index:number) => void;
}
function FilterFooter({setShowModal}:PropTypes) {
  return (
    <div className={styles.main}>
      <button onClick={() => setShowModal(0)}>Brand</button>
      <button onClick={() => setShowModal(1)}>Category</button>
      <button onClick={() => setShowModal(2)}>Price</button>
    </div>
  )
}

export default FilterFooter