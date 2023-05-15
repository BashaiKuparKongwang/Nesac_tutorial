import { createSlice } from "@reduxjs/toolkit";
import { layers } from "../Config";


const initialState = layers;
const layersSlice = createSlice({
    name: "overlaylayer",
    initialState,
    reducers: {
      setAnalyticsDetails: (state, action) => {
        if (action.payload.layer !== undefined) {
          return state.map((layer) =>
            layer.id === action.payload.id
              ? { ...layer, show: !layer.show, layer: action.payload.layer }
              : layer
          );
        } else {
          return state.map((layer) =>
            layer.id === action.payload.id
              ? { ...layer, show: action.payload.show }
              : layer
          );
        }
      },
    },
  });
  
  export const { setAnalyticsDetails } = layersSlice.actions;
  
  export const selectLayerDataSet = (state) => state.layer;
  
  export default layersSlice.reducer;


