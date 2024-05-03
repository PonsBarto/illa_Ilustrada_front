import { configureStore } from '@reduxjs/toolkit';
import authReduce from '../features/users/userSlice';
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    auth:authReduce,
    product:productReducer,
  },
});
