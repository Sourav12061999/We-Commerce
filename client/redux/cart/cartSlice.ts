import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartProductType } from "./initialState";
import initialState from "./initialState";
import { createAsyncThunk } from "@reduxjs/toolkit";

type sendData = {
  productid: string;
  userid: string;
};

type comingData = {
  isSuccess: boolean;
  products: Array<cartProductType>;
};
export const addToCart = createAsyncThunk(
  "cart/add",
  ({ productid, userid }: sendData) => {
    return fetch("/api/cart/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productid, userid }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => err);
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      addToCart.fulfilled,
      (state, action: PayloadAction<comingData>) => {
        state.isLoading = false;
        if (action.payload.isSuccess) {
          state.cartData = action.payload.products;
          state.size = action.payload.products.length;
        } else {
            state.isError=true;
            state.msg = "Product Already Exists"
        }
      }
    );
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.msg = action.error.message || "";
    });
  },
});

const cartActions = cartSlice.actions;
const cartReducers = cartSlice.reducer;

export { cartActions, cartReducers };
