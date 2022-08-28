import React from 'react'
import { productType } from '../product/product.types';
import styles from "./index.module.css";
import MainProduct from "./Main Product/mainProduct";
import SimilarProduct from "./Similar Products/similarProduct";
interface PropType{
    productData:productType,
    similarData:Array<productType>,
}
function ProductDetails({productData,similarData}:PropType) {
  return (
    <div className={styles.productContainer}>
      <MainProduct {...productData}/>
      <SimilarProduct similarProduct={similarData}/>
    </div>
  )
}

export default ProductDetails;