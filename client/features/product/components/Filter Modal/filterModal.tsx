import React from "react";
import { navFilterType } from "../../filterData";
import { RootState } from "../../../../redux/app";
import { useSelector } from "react-redux";
import { filterActions } from "../../../../redux/Filter/filterSlice";
interface PropTypes {
  modalIndex: number;
}
function FilterModal({ modalIndex }: PropTypes) {
  const Component = navFilterType[modalIndex].Component;
  const { checked, unchecked, priceChange } = filterActions;
  const filterState = useSelector((state: RootState) => {
    return state.filters;
  });
  return (
    <>
      {modalIndex === 2 ? (
        <Component priceChange={priceChange} data={filterState.priceFilter} />
      ) : (
        <Component
          filterCardIndex={modalIndex}
          heading={navFilterType[modalIndex].heading}
          checkBoxes={navFilterType[modalIndex].checkBoxes}
          checked={checked}
          unchecked={unchecked}
        />
      )}
    </>
  );
}

export default FilterModal;
