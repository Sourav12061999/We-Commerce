import React from "react";
import styles from "./filter.module.css";
import FilterCards from "../Filter Cards/filterCards";
import PriceCard from "../Price Card/priceCard";
import {useSelector} from "react-redux";
import { filterActions } from "../../../../redux/Filter/filterSlice";
import { RootState } from "../../../../redux/app";
function Filter() {
  const {checked,unchecked,priceChange} = filterActions;
  const filterState = useSelector((state:RootState) =>{
    return state.filters;
  })
  return (
    <div>
      <div className={styles.heading}>
        <h1>Filter</h1>
        <button>Reset</button>
      </div>
      <div>
        {filterState.checkBoxeFilterData.map((el,index) => (
          <React.Fragment key={el.heading}>
            <FilterCards filterCardIndex={index} heading={el.heading} checkBoxes={el.checkBoxes} checked={checked} unchecked={unchecked}/>
          </React.Fragment>
        ))}
        <PriceCard priceChange={priceChange} data={filterState.priceFilter}/>
      </div>
    </div>
  );
}

export default Filter;
