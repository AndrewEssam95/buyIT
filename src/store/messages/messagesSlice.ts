import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TMessage } from "src/types/customTypes";
import actSendMessage from "./act/actSendMessage";

type TMessageState = {
  loading: TLoading;
  error: string | null;
  messages: TMessage[];
};

const initialState: TMessageState = {
  loading: "idle",
  error: null,
  messages: [],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actSendMessage.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actSendMessage.fulfilled, (state, action) => {
      state.loading = "pending";
      state.messages = action.payload;
    });
    builder.addCase(actSendMessage.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default messagesSlice.reducer;
