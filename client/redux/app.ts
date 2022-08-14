import { configureStore } from "@reduxjs/toolkit"
import { filterReducers } from "./Filter/filterSlice"

const store = configureStore({
    reducer: {
        filters:filterReducers,
    }
})

export {store};
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch