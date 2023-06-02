import { createSlice } from '@reduxjs/toolkit';

const polyDistanceSlice = createSlice({
    name: 'polyDistance',
    initialState: 15,
    reducers: {
        setPolyDistance: (state, action) => {
            return action.payload;
        },
    },
});

export const { setPolyDistance } = polyDistanceSlice.actions;
export default polyDistanceSlice.reducer;
export const selectPolyDistanceValue = (state) => state.polyDistance;
