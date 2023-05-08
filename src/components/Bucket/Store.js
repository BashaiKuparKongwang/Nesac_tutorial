import { configureStore } from '@reduxjs/toolkit';
import { produce } from 'immer';

const initialState = {
  selectedDistricts: [],
  selectedLayers: [],
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
        case 'SELECTED_LAYERS':
        const layerIndex = draft.selectedLayers.findIndex(x => {
          return x.id === action.payload.id;
        });

        if (layerIndex === -1) {
          draft.selectedLayers.push(action.payload);
        } else {
          draft.selectedLayers.splice(layerIndex, 1);
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

const store = configureStore({
    reducer:rootReducer,
})
export default store;