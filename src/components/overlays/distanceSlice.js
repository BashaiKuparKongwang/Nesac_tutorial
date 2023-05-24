import { createSlice, createSelector } from '@reduxjs/toolkit';

const distanceSlice = createSlice({
  name: 'distance',
  initialState: '5km',
  reducers: {
    setDistance: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDistance } = distanceSlice.actions;
export default distanceSlice.reducer;

// Selector function to access the distance state
export const selectDistance = (state) => state.distance;

// Memoized selector to efficiently retrieve the distance value
export const selectDistanceValue = createSelector(
  selectDistance,
  (distance) => distance
);
