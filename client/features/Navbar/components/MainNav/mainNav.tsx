import React from "react";
import styles from "./mainNav.module.css";
import SearchBar from "../Searchbar/searchBar";
import { VscAccount } from "react-icons/vsc";
import Cart from "../Cart/cart";
import Link from "next/link";
function MainNav() {
  const isSignedin = false;
  return (
    <div className={styles.main}>
      <div className={styles.logo}>We-Comm</div>
      <div className={styles.options}>
        <Link href={"/product/women"}>
          <div>Women</div>
        </Link>
        <Link href={"/product/men"}>
          <div>Men</div>
        </Link>
        <Link href={"/product/women"}>
          <div>Kids</div>
        </Link>
        <Link href={"/product/women"}>
          <div>Home</div>
        </Link>
        <Link href={"/product/men"}>
          <div>Tech</div>
        </Link>
      </div>
      <div className={styles.alignLeft}>
        <SearchBar />
        {!isSignedin ? (
          <Link href={"/auth"}>
            <div className={styles.account}>
              <VscAccount size={"20px"} />
              <p>Account</p>
            </div>
          </Link>
        ) : (
          <div className={styles.signedin}>
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainNav;
