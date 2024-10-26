import { createSlice } from "@reduxjs/toolkit";

interface ITheme {
  theme: "light" | "dark";
}

const initialState: ITheme = { theme: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggler: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { themeToggler } = themeSlice.actions;
export default themeSlice.reducer;
