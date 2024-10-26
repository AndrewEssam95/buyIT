import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const actRegisterAuth = createAsyncThunk(
  "auth/actRegisterAuth",
  async (formData: TFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.post(
        "http://localhost:5005/users",
        formData
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

export default actRegisterAuth;
