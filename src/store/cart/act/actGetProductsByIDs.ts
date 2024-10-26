import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";
import { TProduct } from "src/types/customTypes";

type TResponse = TProduct[];

const actGetProductsByIDs = createAsyncThunk(
  "cart/actGetProductsByIDs",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const productsIDs = Object.keys(cart.items);

    if (!productsIDs.length) {
      return fulfillWithValue([]);
    }

    try {
      const productsIDsString = productsIDs.map((id) => `id=${id}`).join("&");
      const response = await axios.get<TResponse>(
        `http://localhost:5005/products?${productsIDsString}`
      );
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

export default actGetProductsByIDs;
