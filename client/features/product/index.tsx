import React, { useEffect, useState, useRef } from "react";
import styles from "./product.module.css";
import ProductContainer from "./components/Product Container/product-container";
import Filter from "./components/Filters/filter";
import useFetch from "../../hooks/useFetch";
import { RootState } from "../../redux/app";
import { useSelector } from "react-redux";
import urlCreator from "./utils/urlCreator";
import Pagination from "../../components/Pagination/pagination";
import { useRouter } from "next/router";
function Product() {
  const router = useRouter();
  const { gender } = router.query;
  const { response, isLoading, isError, refetch } = useFetch(
    `/api/Products/${gender}/1/?`,
    "GET"
  );
  const filterState = useSelector((state: RootState) => {
    return state.filters;
  });
  const [currPage, setCurrPage] = useState(0);
  const [currBtn, setCurrBtn] = useState(1);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      refetch(`/api/Products/${gender}/${currBtn}/?${urlCreator(filterState)}`);
    }
  }, [currBtn, filterState, gender,]);

  useEffect(() => {
    setCurrPage(0);
    setCurrBtn(1);
  }, [filterState, gender]);

  return (
    <div className={styles.main}>
      <div className={styles.filterContainer}>
        <Filter />
      </div>
      <div className={styles.productContainer}>
        <ProductContainer
          response={response}
          isLoading={isLoading}
          isError={isError}
          refetch={refetch}
        />
        {!isLoading && !isError && response && (
          <Pagination
            currPage={currPage}
            setCurrPage={setCurrPage}
            currBtn={currBtn}
            setCurrBtn={setCurrBtn}
            noOfPages={response.pages}
          />
        )}
      </div>
    </div>
  );
}

export default Product;
