import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import hotelSlice from './slices/hotelSlice';

export default configureStore({
  reducer: {
    counter: counterSlice,
    hotel:hotelSlice,
  },
});
