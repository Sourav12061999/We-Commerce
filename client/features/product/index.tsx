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
import FilterFooter from "./components/Filter Footer/filterFooter";
import Modal from "../../components/Modal/modal";
import FilterModal from "./components/Filter Modal/filterModal";
import { productType } from "./product.types";

interface PropTypes {
  data: { data: Array<productType> };
}
function Product({ data }: PropTypes) {
  const router = useRouter();
  const { gender } = router.query;
  const { response, isLoading, isError, refetch, setResponse } = useFetch(
    `/api/Products/${gender}/1/?`,
    "GET",
    false
  );
  const filterState = useSelector((state: RootState) => {
    return state.filters;
  });
  const [currPage, setCurrPage] = useState(0);
  const [currBtn, setCurrBtn] = useState(1);
  const [showModal, setShowModal] = useState<null | number>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    setResponse(data);
    console.log(data);
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      refetch(`/api/Products/${gender}/${currBtn}/?${urlCreator(filterState)}`);
    }
  }, [currBtn, filterState, gender]);

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
          response={response || data}
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
      <FilterFooter setShowModal={setShowModal} />
      {showModal !== null ? (
        <Modal setShowModal={setShowModal}>
          {<FilterModal modalIndex={showModal} />}
        </Modal>
      ) : null}
    </div>
  );
}

export default Product;
