import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducers/weatherSlice";
import themeReducer from "./reducers/themeSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
