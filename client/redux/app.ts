import { configureStore } from "@reduxjs/toolkit"
import { filterReducers } from "./Filter/filterSlice"
import { authReducers } from "./auth/authSlice";
const store = configureStore({
    reducer: {
        filters:filterReducers,
        auth:authReducers,
    }
})

export {store};
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch