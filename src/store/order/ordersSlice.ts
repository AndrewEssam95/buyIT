import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TOrderItem } from "src/types/customTypes";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetOrders from "./act/actGetOrders";

type TOrderState = {
  loading: TLoading;
  error: string | null;
  ordersList: TOrderItem[];
};

const initialState: TOrderState = {
  loading: "idle",
  error: null,
  ordersList: [],
};

const ordersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrderSlice: (state) => {
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    // Placing Order
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading = "succeded";
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // Get Orders
    builder.addCase(actGetOrders.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetOrders.fulfilled, (state, action) => {
      state.loading = "succeded";
      state.ordersList = action.payload;
    });
    builder.addCase(actGetOrders.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const { resetOrderSlice } = ordersSlice.actions;
export default ordersSlice.reducer;
