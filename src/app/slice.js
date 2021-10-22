import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const slice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    setTime: (state) => {
      state.time = new Date().getTime();
    },
    setTooltip: (state, action) => {
      state.tooltip = action.payload;
    },
  },
});

export const { setTime, setTooltip } = slice.actions;

export const selectTime = (state) => state.clock.time;

export const selectTooltip = (state) => state.clock.tooltip;

export default slice.reducer;
