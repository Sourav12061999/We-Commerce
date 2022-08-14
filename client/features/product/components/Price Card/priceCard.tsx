import React, { useState } from "react";
import styles from "./card.module.css";
import PriceSlider from "../Price Slider/priceSlider";
import { useDispatch } from "react-redux";
import { priceFilterType } from "../../product.types";
interface PropTypes {
  priceChange: Function;
  data: priceFilterType;
}
function PriceCard({ priceChange, data }: PropTypes) {
  const dispatch = useDispatch();
  const [priceState, setPriceState] = useState<priceFilterType>({
    min: 0,
    max: 4000,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "min" | "max"
  ) => {
    setPriceState({ ...priceState, [key]: +e.target.value });
  };
  return (
    <div className={styles.card}>
      <h3>Price</h3>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <input
            onChange={(e) => handleChange(e, "min")}
            type="number"
            value={priceState.min}
          />
          <input
            onChange={(e) => handleChange(e, "max")}
            type="number"
            value={priceState.max}
          />
        </div>
        <button
          onClick={() => {
            dispatch(priceChange(priceState));
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default PriceCard;
