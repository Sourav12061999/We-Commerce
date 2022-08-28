import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
import React from "react";
import { productType } from "../../product/product.types";
import styles from "./mainProduct.module.css";

function MainProduct({ img, brand, name, price, size }: productType) {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>LATEST SEASON | NEW ON WE-COMM</h3>
        <h1 className={styles.brand}>{brand.toUpperCase()}</h1>
        <p className={styles.name}>{name.toUpperCase()}</p>
        <h3 className={styles.price}>{"₹" + price}</h3>
        <div className={styles.sizes}>
          <h3>Select the Sizes</h3>
          <div>
            {size.map((el) => (
              <div>{el}</div>
            ))}
          </div>
        </div>
        <button className={styles.cartButton}>ADD TO BAG</button>
        <h3>Offers for you</h3>
        <div className={styles.offerBox}>
          <h4>Use code NFFIRST10 to get flat 10%</h4>
          <p>
            Use code NFFIRST10 to get flat 10% off on minimum order of INR 1600.
            Offer valid for first time users only
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainProduct;
