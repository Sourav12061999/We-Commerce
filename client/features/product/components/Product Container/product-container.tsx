import React from "react";
import ProductCard from "../product-card/productCard";
import { productType } from "../../product.types";
import styles from "./container.module.css";
interface PropTypes {
  response: any;
  isLoading: boolean;
  isError: boolean;
  refetch: Function;
}
function ProductContainer({
  response,
  isLoading,
  isError,
}: PropTypes) {
  return (
    <div className={styles.container}>
      {!isLoading && !isError && response
        ? response.data.map((el: productType) => (
            <React.Fragment key={el._id}>
              <ProductCard data={el} />
            </React.Fragment>
          ))
        : null}
    </div>
  );
}

export default ProductContainer;
