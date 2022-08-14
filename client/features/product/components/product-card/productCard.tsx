import React from "react";
import styles from "./productCard.module.css";
import { productType } from "../../product.types";

interface PropTypes {
  data: productType;
}
function ProductCard({ data }: PropTypes) {
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={data.img} alt="" />
        <div className={styles.brand}>{data.brand.toUpperCase()}</div>
        <div className={styles.catagory}>{data.catagory.toUpperCase()}</div>
      </div>
      <div className={styles.text}>
        <h2>{data.name}</h2>
        <p>₹{data.price}</p>
        <p>{data.size.join(", ")}</p>
      </div>
    </div>
  );
}

export default ProductCard;
