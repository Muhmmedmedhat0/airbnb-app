import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  hotels: [],
  error: "",
};
export const fetchHotels = createAsyncThunk("hotel/fetchHotels", () => {
  
  return axios.get("http://localhost:9000/api/hotels").then((response) =>response.data)});
const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.loading = false;
      state.hotels = action.payload;
      state.error;
    });
    builder.addCase(fetchHotels.rejected, (state, action) => {
      state.loading = false;
      state.hotels = [];
      state.error = action.error.message;
    });
  },
});

export default hotelSlice.reducer;
