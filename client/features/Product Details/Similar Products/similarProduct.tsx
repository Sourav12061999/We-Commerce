import React, { useRef } from "react";
import { productType } from "../../product/product.types";
import styles from "./similar.module.css";
import ProductCard from "../../product/components/product-card/productCard";
interface PropTypes {
  similarProduct: Array<productType>;
}
function SimilarProduct({ similarProduct }: PropTypes) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollProduct = (button: "prev" | "next") => {
    if (containerRef.current) {
      let containerWidth = containerRef.current.getBoundingClientRect().width;
      if (button === "prev") containerRef.current.scrollLeft -= containerWidth;

      if (button === "next") containerRef.current.scrollLeft += containerWidth;
    }
  };
  return (
    <div className={styles.main}>
      <div ref={containerRef} className={styles.container}>
        {similarProduct.map((el) => (
          <div className={styles.products} key={el._id}>
            <ProductCard data={el} />
          </div>
        ))}
      </div>
      <button onClick={() => scrollProduct("prev")} className={styles.prev}>
        {"<"}
      </button>
      <button onClick={() => scrollProduct("next")} className={styles.next}>
        {">"}
      </button>
    </div>
  );
}

export default SimilarProduct;
