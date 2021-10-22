import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./slice";

export const store = configureStore({
  reducer: {
    clock: clockReducer,
  },
});
