import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "src/types/customTypes";
import actRegisterAuth from "./act/actRegisterAuth";
import actLoginAuth from "./act/actLoginAuth";

interface IAuthState {
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  } | null;
  accessToken: string | null;
  loading: TLoading;
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  accessToken: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUI: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    authLogout: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actRegisterAuth.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actRegisterAuth.fulfilled, (state) => {
      state.loading = "succeded";
    });
    builder.addCase(actRegisterAuth.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
    // actLoginAuth
    builder.addCase(actLoginAuth.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actLoginAuth.fulfilled, (state, action) => {
      state.loading = "succeded";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
    builder.addCase(actLoginAuth.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { actRegisterAuth, actLoginAuth };
export const { resetUI, authLogout } = authSlice.actions;
export default authSlice.reducer;
