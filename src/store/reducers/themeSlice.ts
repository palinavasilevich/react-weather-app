import { createSlice } from "@reduxjs/toolkit";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeStateType = {
  theme: string;
};

const initialState: ThemeStateType = {
  theme: Theme.LIGHT,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
