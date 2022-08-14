import React from "react";
import styles from "./filterCard.module.css";
import { CheckboxTypes } from "../../product.types";
import { useDispatch } from "react-redux";
interface Props {
  heading: string;
  checkBoxes: Array<CheckboxTypes>;
  checked: Function;
  unchecked: Function;
  filterCardIndex: number;
}
function FilterCards({
  heading,
  checkBoxes,
  checked,
  unchecked,
  filterCardIndex,
}: Props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <h3>{heading.toUpperCase()}</h3>
      <div>
        {checkBoxes.map((el, checkboxIndex) => (
          <div className={styles.check} key={el.name}>
            <input
              onChange={(e) => {
                if (e.target.checked === true) {
                  dispatch(
                    checked({ cardIndex: filterCardIndex, checkboxIndex })
                  );
                } else {
                  dispatch(
                    unchecked({ cardIndex: filterCardIndex, checkboxIndex })
                  );
                }
              }}
              type="checkbox"
            />
            <p>{el.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterCards;
