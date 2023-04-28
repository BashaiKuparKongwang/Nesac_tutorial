//store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';


const initialCheckboxState = {
  selectedDistricts: [], //initially no districts are selected
};

const checkboxReducer = (state = initialCheckboxState, action) => {
  switch (action.type) {
    case "SELECT_DISTRICT":
      return {
        ...state,
        selectedDistricts: action.payload, // update the selected districts with the payload received
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  checkbox: checkboxReducer,
});

const store = configureStore({
    reducer:rootReducer,
})
export default store;
