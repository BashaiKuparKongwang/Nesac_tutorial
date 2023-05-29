import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  villages: [],
};

const villageSlice = createSlice({
  name: "projectVillage",
  initialState,
  reducers: {
    setStoreVillages: (state, action) => {
      state.villages = action.payload;
    },
  },
});

export const { setStoreVillages } = villageSlice.actions;

export const selectVillages = (state) => {
  const villages = state.projectVillage.villages;
  return villages ? Object.values(villages) : [];
};

export default villageSlice.reducer;
