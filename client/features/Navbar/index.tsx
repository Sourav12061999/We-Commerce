import React from "react";
import MainNav from "./components/MainNav/mainNav";
import TopNav from "./components/TopNav/topNav";
import MobNav from "./components/MobNav/mobNav";
import styles from "./navbar.module.css";
import SearchBar from "./components/Searchbar/searchBar";
function Navbar() {
  return (
    <nav className={styles.nav}>
     {/* This is the nav in large screens */}
      <div className={styles.large}>
        <TopNav />
        <MainNav />
      </div>

      {/* This is the nav in mid and small screens  */}
      <div className={styles.small}>
        <MobNav/>
        <SearchBar width="90vw"/>
      </div>
    </nav>
  );
}

export default Navbar;
