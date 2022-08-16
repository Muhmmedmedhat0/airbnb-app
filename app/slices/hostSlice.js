import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotel: {},
  hotels:[],
  user:{},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const insertHotel = createAsyncThunk("hotel/insertHotel", () => {
  return axios
    .post("http://localhost:9000/api/hotels").headers(
      {"Content-Type": "application/json; charset=utf-8"}
    )
    .body(JSON.stringify(hotel))
    .then((response) => response.data);
});
export const BecomeHost = createAsyncThunk("hotel/BecomeHost", async (obj) => {
  console.log(id);
  const response = await axios.put(`http://localhost:9000/api/users/${obj.id}`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body:JSON.stringify(obj.isAdmin)
  });
  return response.data;
});

export const hostSlice = createSlice({
  name: "host",
  initialState,

  reducers: {
    setPlaceType: (state, action) => {
      state.hotel.type = action.payload;
      state.hotel.distance = "555.5k";
      state.hotel.rating = "5";
      state.hotel.rating = "5";
      state.hotel.creator = "62f5ac55b739a40996de9187";
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
    
    setAllHotels: (state, action) => {
      state.hotels.push(state.hotel) ;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(insertHotel.fulfilled, (state, action) => {
      state.hotel = action.payload;
      console.log(action.payload);
      state.error;
    });
    builder.addCase(insertHotel.rejected, (state, action) => {
      state.error = action.error.message;
      console.log(action.payload);
    });

    builder.addCase(BecomeHost.pending, (state, action) => {
      state.user = action.payload;
      // console.log()
      console.log(action.error.message);
      console.log(action.payload);
      // state.error;
    });
    builder.addCase(BecomeHost.fulfilled, (state, action) => {
      state.user = action.payload;
      // console.log()
      console.log(action.error.message);
      console.log(action.payload);
      // state.error;
    });
    builder.addCase(BecomeHost.rejected, (state, action) => {
      state.error = action.error.message;
      console.log(state.error);
      console.log(action.payload);

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
  setAllHotels
} = hostSlice.actions;

export default hostSlice.reducer;
