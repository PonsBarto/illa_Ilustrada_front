import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("auth/register", async (thunkAPI) => {
  try {
   
  } catch (error) {

  }
});

const initialState = {
  user: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState:initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
     .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
     .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;
      });
  }
});