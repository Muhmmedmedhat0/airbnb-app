import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  hotelData: [],
  error: "",
};
export const fetchHotels = createAsyncThunk("hotel/fetchHotels", () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => response.data);
});
const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.loading = false;
      state.hotelData = action.payload;
      state.error;
    });
    builder.addCase(fetchHotels.rejected, (state, action) => {
      state.loading = false;
      state.hotelData = [];
      state.error = action.error.message;
    });
  },
});

export default hotelSlice.reducer;
