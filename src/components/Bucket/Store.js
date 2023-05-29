import { configureStore } from "@reduxjs/toolkit";
import overlaylayerReducer from "../overlays/layersSlice";
import dataReducer from "../overlays/dataSlice";
import { produce } from 'immer';
import villageReducer from "../overlays/villageSlice"; // Import the villageSlice
import distanceReducer from "../overlays/distanceSlice"; // Import the villageSlice
import projectVillageReducer from "../overlays/projectVillageSlice"; // Import the villageSlice


const initialState = {
  selectedDistricts: [],
  clickedPoints: [], 
};


const rootReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SELECTED_DISTRICTS':
        const index = draft.selectedDistricts.indexOf(action.payload);
        if (index === -1) {
          draft.selectedDistricts.push(action.payload);
        } else {
          draft.selectedDistricts.splice(index, 1);
        }
        break;
      case 'SET_CLICKED_POINT':
        return {
          ...state,
          clickedPoints: [...state.clickedPoints, action.payload],
        };
      default:
        break;
    }
  });
};

export default configureStore({
  reducer: {
    layer: overlaylayerReducer,
    data: dataReducer,
    village: villageReducer, // Include the villageReducer in the store configuration
    distance: distanceReducer,
    projectVillage: projectVillageReducer,
    rootReducer: rootReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});