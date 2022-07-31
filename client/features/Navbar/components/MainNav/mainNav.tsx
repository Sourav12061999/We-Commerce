import React from "react";
import styles from "./mainNav.module.css";
import SearchBar from "../Searchbar/searchBar";
import {VscAccount} from "react-icons/vsc";
import Cart from "../Cart/cart";
function MainNav() {
  const isSignedin=true;
  return (
    <div className={styles.main}>
      <div className={styles.logo}>We-Comm</div>
      <div className={styles.options}>
        <div>Women</div>
        <div>Men</div>
        <div>Kids</div>
        <div>Home</div>
        <div>Tech</div>
      </div>
      <div className={styles.alignLeft}>
        <SearchBar />
        {
          !isSignedin?(<div className={styles.account}>
            <VscAccount size={"20px"}/>
            <p>Account</p>
         </div>):(
          <div className={styles.signedin}>
            <Cart/>
          </div>
         )
        }
        
      </div>
    </div>
  );
}

export default MainNav;
