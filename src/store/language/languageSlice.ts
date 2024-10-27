import { createSlice } from "@reduxjs/toolkit";

interface ILanguageState {
  language: "en" | "ar";
  pageDirection: "rtl" | "ltr";
}

const initialState: ILanguageState = {
  language: "en",
  pageDirection: "ltr",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    languageToggler: (state, action) => {
      state.language = action.payload;
      state.pageDirection = action.payload === "en" ? "ltr" : "rtl";
    },
  },
});

export const { languageToggler } = languageSlice.actions;
export default languageSlice.reducer;
