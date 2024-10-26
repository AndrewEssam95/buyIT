import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "src/types/customTypes";

type TResponse = TProduct[];

const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (categoryPrefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get<TResponse>(
        `http://localhost:5005/products?categoryPrefix=${categoryPrefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An Unexpected Error.");
      }
    }
  }
);

export default actGetProducts;
