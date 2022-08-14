import { createSlice } from "@reduxjs/toolkit";
import pageState from "./initialState";
const pageSlice = createSlice({
  name: "page",
  initialState: pageState,
  reducers: {
  },
});

const pageActions = pageSlice.actions;
const pageReducers = pageSlice.reducer;

export {pageActions,pageReducers};
