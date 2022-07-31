import React from 'react'
import styles from "./searchBar.module.css";
import {BiSearchAlt2} from "react-icons/bi";
interface Props{
    width?:string,
}
function SearchBar({width}:Props) {
  return (
    <div className={styles.searchBar}>
        <BiSearchAlt2 size={"30px"}/>
        <input style={{width: width || "auto"}} placeholder='Search for products' type="text" />
    </div>
  )
}

export default SearchBar