import { createSlice } from "@reduxjs/toolkit";
import { authData } from "../../features/auth/auth.type";
const initialState: authData = {
  isSignin: false,
  userData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSuccess: (state, action) => {
      state.userData = action.payload.userData;
      state.isSignin = true;
    },
  },
});

const authActions = authSlice.actions;
const authReducers = authSlice.reducer;

export { authActions, authReducers };
