import { configureStore } from "@reduxjs/toolkit";
import filter from "./slicer/filterSlice";

export const store = configureStore({
  reducer: { filter },
});
