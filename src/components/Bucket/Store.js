import { configureStore } from '@reduxjs/toolkit';
import { produce } from 'immer';

const initialState = {
  selectedDistricts: [],
};

const rootReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SELECTED_DISTRICTS':
        const index = draft.selectedDistricts.indexOf(action.payload);
        if (index === -1) {
          //if item is check it will add to selectedDistricts
        draft.selectedDistricts.push(action.payload);
        } else { 
          //if item is uncheck it will remove from selectedDistricts
          draft.selectedDistricts.splice(index, 1);
        }
        break;
      default:
        break;
    }
  });
};

const store = configureStore({
    reducer:rootReducer,
})
export default store;