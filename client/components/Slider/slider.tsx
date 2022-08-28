import React, { ReactNode } from "react";
import GrayScreen from "../Gray Screen/grayScreen";
import styles from "./slider.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app";
import { BsArrowLeft } from "react-icons/bs";
interface PropTypes {
  setShowCart: Function;
}
function Slider({ setShowCart }: PropTypes) {
  const cartData = useSelector((state: RootState) => {
    return state.cart.cartData;
  });
  return (
    <div>
      <GrayScreen
        clickHandler={() => {
          setShowCart(false);
        }}
      >
        <div className={styles.slider}>
          <div className={styles.close} onClick={() =>{
            setShowCart(false);
          }}>
            <BsArrowLeft fontSize={"50px"} />
          </div>
          {cartData.map((el) => (
            <div className={styles.cartProduct} key={el._id}>
                <div>
                    <img src={el.img} alt="" />
                </div>
                <div>
                    <h3>{el.brand}</h3>
                    <p>{"₹"+el.price}</p>
                </div>
            </div>
          ))}
        </div>
      </GrayScreen>
      ,
    </div>
  );
}

export default Slider;
