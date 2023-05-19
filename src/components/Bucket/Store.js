import { configureStore } from "@reduxjs/toolkit";
import overlaylayerReducer from "../overlays/layersSlice";
import dataReducer from "../overlays/dataSlice";
import { produce } from 'immer';

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
    rootReducer: rootReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});