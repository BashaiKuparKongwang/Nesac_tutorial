import { createSlice } from "@reduxjs/toolkit";
import { proj } from "../Data"; // Assuming you have a file named "data.js" exporting the "proj" array

const initialState = proj;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // Add any additional reducers if needed
  },
});

export const { setAnalyticsDetails } = dataSlice.actions;

export const selectLayerDataSet = (state) => state.data;

export default dataSlice.reducer;