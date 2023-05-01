import { configureStore } from '@reduxjs/toolkit';
import userSlice from './UserSlice';

export default configureStore({
  reducer: {
    data: userSlice,
  },
});
