import { configureStore } from "@reduxjs/toolkit";
import overlaylayerReducer from "../overlays/layersSlice";

export default configureStore({
  reducer: {
    layer: overlaylayerReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});