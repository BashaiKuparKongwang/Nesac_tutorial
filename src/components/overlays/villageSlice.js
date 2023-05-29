// This component should be named markerSlice becuase it contains only the data of that specific maker we choose

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
};

const villageSlice = createSlice({
  name: "village",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = villageSlice.actions;

export const selectLocation = (state) => state.village.location;

export default villageSlice.reducer;
