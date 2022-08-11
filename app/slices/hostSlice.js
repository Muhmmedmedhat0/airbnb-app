import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotel: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const insertHotel = createAsyncThunk("hotel/insertHotel", () => {
    return axios
      .post("http://localhost:9000/api/hotels",JSON.stringify(hotel))
      .then((response) => response.data);
  });
// console.log(hotel)
// return hotel;
// })

export const hostSlice = createSlice({
  name: "host",
  initialState,

  reducers: {
    setPlaceType: (state, action) => {
      state.hotel.type = action.payload;
      state.hotel.distance="555.5k"
      state.hotel.rating="5"
      state.hotel.rating="5"
      state.hotel.creator="62f2bb3977588da2d98044a4"
    
    },
    setSpaceType: (state, action) => {
      state.hotel.name = action.payload;
    },
    setHostCity: (state, action) => {
      state.hotel.city = action.payload;
    },
    setAddress: (state, action) => {
      state.hotel.address = action.payload;
    },
    setHostDesc: (state, action) => {
      state.hotel.desc = action.payload;
    },
    setCheapestPrice: (state, action) => {
      state.hotel.cheapestPrice = action.payload;
    },
    settitle: (state, action) => {
      state.hotel.title = action.payload;
    },
    setHostImage: (state, action) => {
        state.hotel.images = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(insertHotel.fulfilled, (state, action) => {
      state.hotel = action.payload;
      state.error;
    });
    builder.addCase(insertHotel.rejected, (state, action) => {
      state.error = action.error.message;
    //   state.message=action.message
    }); 
  },  
});
export const {
  setPlaceType,
  settitle,
  setSpaceType,
  setCheapestPrice,
  setHostDesc,
  setAddress,
  setHostImage,
  setHostCity,
} = hostSlice.actions;

export default hostSlice.reducer;
