import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import authReducer from './slices/auth/authSlice';
import hotelSlice from './slices/hotelSlice';
import filterSlice from './slices/filterSlice';
import hostSlice from './slices/hostSlice';
import wishListSlice from './slices/wishListSlice';
import tripsSlice from './slices/tripsSlice';

export default configureStore({
  reducer: {
    counter: counterSlice,
    hotel:hotelSlice,
    auth: authReducer,
    filterType:filterSlice,
    host:hostSlice,
    wishList:wishListSlice,
    trips:tripsSlice,

  },
});
