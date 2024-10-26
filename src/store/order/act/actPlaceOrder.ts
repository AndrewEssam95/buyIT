import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";

const actPlaceOrder = createAsyncThunk(
  "orders/actPlaceOrder",
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart, registerAuth } = getState() as RootState;

    const orderItems = cart.productsFullInfo.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: cart.items[item.id as number],
    }));

    try {
      const response = await axios.post("http://localhost:5005/orders", {
        userId: registerAuth.user?.id,
        items: orderItems,
        subtotal,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data.message || error.message);
      } else {
        return rejectWithValue("An Unexpected Error.");
      }
    }
  }
);

export default actPlaceOrder;
