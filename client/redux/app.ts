import { configureStore } from "@reduxjs/toolkit"
import { filterReducers } from "./Filter/filterSlice"
import { authReducers } from "./auth/authSlice";
import { cartReducers } from "./cart/cartSlice";
const store = configureStore({
    reducer: {
        filters:filterReducers,
        auth:authReducers,
        cart:cartReducers,
    }
})

export {store};
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch