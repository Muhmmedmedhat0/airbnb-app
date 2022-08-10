import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
const initialState = {
  loading: false,
  hotels: [],
  error: "",
};

export const fetchHotels = createAsyncThunk("hotel/fetchHotels", () => {
  
  return axios
    .get("http://localhost:9000/api/hotels")
    .then((response) => response.data);
});
export const getRoom = createAsyncThunk(
  `room/getRoom`,  (hotel, thunkAPI) => {
    
    return axios.get(`http://localhost:9000/api/hotels/find/${hotel.id}`).then((response)=>response.data)
    
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
      state.hotels = action.payload;
      state.error;
    });
    builder.addCase(fetchHotels.rejected, (state, action) => {
      state.loading = false;
      state.hotels = [];
      state.error = action.error.message;
    }); 
    builder.addCase(getRoom.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRoom.fulfilled, (state, action) => {
      state.loading = false;
      // console.log(action.payload)
      state.hotels = action.payload;
      state.error;
    });
    builder.addCase(getRoom.rejected, (state, action) => {
      state.loading = false;
      state.hotels = [];
      state.error = action.error.message;
    });
  },
});

export default hotelSlice.reducer;
