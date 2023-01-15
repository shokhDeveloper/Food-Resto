import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./Reducer/RootReducer";

export const store = configureStore({
    reducer: RootReducer
})