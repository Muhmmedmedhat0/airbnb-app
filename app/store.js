import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import hotelSlice from './slices/hotelSlice';
import filterSlice from './slices/filterSlice';
import host from './slices/hostSlice';
import wishListSlice from './slices/wishListSlice';
import tripsSlice from './slices/tripsSlice';
import user from './slices/userSlice';

export default configureStore({
  reducer: {
    hotel: hotelSlice,
    auth: authReducer,
    filterType: filterSlice,
    host,
    wishList: wishListSlice,
    trips: tripsSlice,
    user,
  },
});
