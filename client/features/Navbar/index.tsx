import React from "react";
import MainNav from "./components/MainNav/mainNav";
import TopNav from "./components/TopNav/topNav";
import MobNav from "./components/MobNav/mobNav";
import styles from "./navbar.module.css";
import SearchBar from "./components/Searchbar/searchBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth/authSlice";
function Navbar() {
  const dispatch = useDispatch();
  const { authSuccess } = authActions;
  useEffect(() => {
    if (localStorage.getItem("userID") == null) return;
    let lsdata = JSON.parse(localStorage.getItem("userID") || "");
    fetch(`/api/auth/${lsdata}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.isError) return;
        dispatch(authSuccess({ userData: res.user, isSignin: true }));
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <nav className={styles.nav}>
      {/* This is the nav in large screens */}
      <div className={styles.large}>
        <TopNav />
        <MainNav />
      </div>

      {/* This is the nav in mid and small screens  */}
      <div className={styles.small}>
        <MobNav />
        <SearchBar width="90vw" />
      </div>
    </nav>
  );
}

export default Navbar;
