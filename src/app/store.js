import { configureStore } from '@reduxjs/toolkit';
import authReduce from '../features/users/userSlice'

export const store = configureStore({
  reducer: {
    auth:authReduce
  },
});
