// Define action types
import { layers } from './Config';

export const SET_CLICKED_POINT = 'SET_CLICKED_POINT';
export const REMOVE_CLICKED_POINT = 'REMOVE_CLICKED_POINT';
export const SET_SELECTED_DISTRICTS = 'SET_SELECTED_DISTRICTS';


// Define action creators
export const setClickedPoint = (payload) => ({
    type: 'SET_CLICKED_POINT',
    payload: {
      ...payload,
      layers: layers.map((layer) =>
        layer.text === payload.layer ? { ...layer, show: !layer.show } : layer
      ),
    },
  });

export const removeClickedPoint = (index) => {
  return {
    type: REMOVE_CLICKED_POINT,
    payload: index
  };
};

export const setSelectedDistricts = (district) => {
  return {
    type: SET_SELECTED_DISTRICTS,
    payload: district
  };
};
