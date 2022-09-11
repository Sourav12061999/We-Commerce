import React, { useState,useEffect } from "react";
import styles from "./searchBar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import useDebounce from "../../../../hooks/useDebounce";
import {productType} from "../../../product/product.types";
import { useRouter } from 'next/router'
interface Props {
  width?: string;
}
function SearchBar({ width }: Props) {
  const [showSearch, setshowSearch] = useState(false);
  const { data, fetchData } = useDebounce();
  const router = useRouter();

  const closeSearch = () =>{
    setshowSearch(false);
  }
  useEffect(() => {
    document.addEventListener("mousedown",closeSearch)
    return () => {
      document.removeEventListener("mousedown",closeSearch);
    }
  }, [])
  
  
  return (
    <div className={styles.searchBar}>
      <BiSearchAlt2 size={"30px"} />
      <input
        onInput={(event) => {
          if (event.currentTarget.value.trim() === "") {
            closeSearch();
          } else {
            setshowSearch(true);
            fetchData(`/api/Products/Search/${event.currentTarget.value}`);
          }
        }}
        style={{ width: width || "auto" }}
        placeholder="Search for products"
        type="text"
      />
      {showSearch && <div className={styles.searchOptions}>
        {
          data?.user.map((el:productType) =>{
            return (
              <div onMouseDown={() =>{
                 router.push(`/productDetails/${el._id}`)
              }} className={styles.searchProducts} key={el._id}>
                <img src={el.img} alt="" />
                <div>
                  <h2>{el.brand}</h2>
                  <p>{el.name}</p>
                </div>
              </div>
            )
          })
        }
        </div>}
    </div>
  );
}

export default SearchBar;
