import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TProduct } from "src/types/customTypes";
import actGetProductsByIDs from "./act/actGetProductsByIDs";

interface ICartState {
  items: { [key: number]: number };
  productsFullInfo: TProduct[];
  totalQuantity: number;
  loading: TLoading;
  error: null | string;
}

const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
  totalQuantity: 0,
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id]++;
      } else if (!state.items[id]) {
        state.items[id] = 1;
      }
      state.totalQuantity++;
    },
    removeItem: (state, action) => {
      state.totalQuantity -= state.items[action.payload];
      delete state.items[action.payload];
      state.productsFullInfo = state.productsFullInfo.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      state.items[action.payload.id]++;
      state.totalQuantity++;
    },
    decreaseQuantity: (state, action) => {
      state.items[action.payload.id]--;
      state.totalQuantity--;
    },
    cartProductsCleanUp: (state) => {
      state.productsFullInfo = [];
    },
    clearCart: (state) => {
      state.items = {};
      state.productsFullInfo = [];
      state.totalQuantity = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByIDs.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByIDs.fulfilled, (state, action) => {
      state.loading = "succeded";
      state.productsFullInfo = action.payload as TProduct[];
    });
    builder.addCase(actGetProductsByIDs.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actGetProductsByIDs };
export const {
  addToCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  cartProductsCleanUp,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
