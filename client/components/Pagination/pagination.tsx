import React, { useState } from "react";
import styles from "./pagination.module.css";
import pageCreator from "./pageCreator";
interface PropTypes {
  noOfPages: number;
  currPage: number;
  setCurrPage: Function;
  currBtn: number;
  setCurrBtn: Function;
}
function Pagination({
  noOfPages,
  currPage,
  currBtn,
  setCurrPage,
  setCurrBtn,
}: PropTypes) {
  const allPages = pageCreator(noOfPages, 3);
  return (
    <div className={styles.center}>
      <div className={styles.pagination}>
        <button
          className={styles.arrow}
          onClick={() => {
            if (currPage > 0) {
              setCurrPage(currPage - 1);
            }
          }}
        >
          &laquo;
        </button>
        {allPages[currPage]?.map((el) => (
          <button
           key={el}
            style={
              el === currBtn
                ? { backgroundColor: "#4CAF50", color: "white", border: "none" }
                : {}
            }
            onClick={() => {
              setCurrBtn(el);
            }}
          >
            {el}
          </button>
        ))}
        <button
          className={styles.arrow}
          onClick={() => {
            if (currPage < allPages.length - 1) {
              setCurrPage(currPage + 1);
            }
          }}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
