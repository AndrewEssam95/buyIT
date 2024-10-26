import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TProduct } from "src/types/customTypes";
import actWishToggle from "./act/actWishToggle";
import actGetWishlist from "./act/actGetWishlist";
import { authLogout } from "@store/auth/authSlice";

interface IWishlistState {
  itemsId: number[];
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}

const initialState: IWishlistState = {
  itemsId: [],
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    wishlistProductsCleanUp: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actWishToggle.pending, (state) => {
      state.error = null;
    });
    builder.addCase(actWishToggle.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.itemsId.push(action.payload.productId);
      } else {
        state.itemsId = state.itemsId.filter(
          (item) => item !== action.payload.productId
        );
        state.productsFullInfo = state.productsFullInfo.filter(
          (item) => item.id !== action.payload.productId
        );
      }
    });
    builder.addCase(actWishToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // actGetWishlist
    builder.addCase(actGetWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.loading = "succeded";
      if (action.payload.dataType === "productsFullInfo") {
        state.productsFullInfo = action.payload.data as TProduct[];
      } else if (action.payload.dataType === "productsIds") {
        console.log("IDS: ", state.itemsId);
        state.itemsId = action.payload.data as number[];
      }
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // Log Out
    builder.addCase(authLogout, (state) => {
      state.itemsId = [];
      state.productsFullInfo = [];
    });
  },
});

export const { wishlistProductsCleanUp } = wishlistSlice.actions;
export default wishlistSlice.reducer;
