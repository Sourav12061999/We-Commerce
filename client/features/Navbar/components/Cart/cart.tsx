import React, { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import styles from "./cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/app";
import { AppDispatch } from "../../../../redux/app";
import { getCart } from "../../../../redux/cart/cartSlice";
import Slider from "../../../../components/Slider/slider";
function Cart() {
  const [showCart, setShowCart] = useState(false);
  const cartSize = useSelector((state: RootState) => state.cart.size);
  const userid = useSelector((state: RootState) => state.auth.userData?._id);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCart({ userid: userid || "" }));
  }, []);

  return (
    <>
      <div onClick={() => {
        setShowCart(true)
      }} className={styles.cart}>
        <BsCart size={"30px"} />
        <div className={styles.cartCount}>{cartSize}</div>
      </div>
      {showCart && <Slider setShowCart={setShowCart} />}
    </>
  );
}

export default Cart;
