import { createSlice } from "@reduxjs/toolkit";
import filterState from "./initialState";
const filterSlice = createSlice({
  name: "filter",
  initialState: filterState,
  reducers: {
    checked: (state, action) => {
      state.checkBoxeFilterData[action.payload.cardIndex].checkBoxes[
        action.payload.checkboxIndex
      ].isChecked = true;
      
    },
    unchecked: (state, action) => {
      state.checkBoxeFilterData[action.payload.cardIndex].checkBoxes[
        action.payload.checkboxIndex
      ].isChecked = false;
    },
    priceChange: (state,action) =>{
        state.priceFilter.max=action.payload.max;
        state.priceFilter.min=action.payload.min;
    }
  },
});

const filterActions = filterSlice.actions;
const filterReducers = filterSlice.reducer;

export {filterActions,filterReducers};
