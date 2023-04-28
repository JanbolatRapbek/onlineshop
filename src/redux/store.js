import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slicer/filterSlice";

export const store = configureStore({
  reducer: { counterReducer },
});
