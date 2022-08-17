import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  hotel: {},
  hotels: [],
  user: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// inser hotel
export const insertHotel = createAsyncThunk(
  `hotel/insertHotel`,
  async (hotel, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(`http://localhost:8080/api/hotels/`, {
        method: 'POST',
        body: JSON.stringify(hotel),
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const hostSlice = createSlice({
  name: 'host',
  initialState,

  reducers: {
    setPlaceType: (state, action) => {
      state.hotel.type = action.payload;
      state.hotel.distance = '555.5k';
      state.hotel.rating = '5';
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
      // state.hotel.images = action.payload;
    },

    setAllHotels: (state, action) => {
      state.hotels.push(state.hotel);
    },
  },
  extraReducers: {
    // insert hotel
    [insertHotel.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      console.log(action.payload);
    },
    [insertHotel.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.hotels.push(action.payload);
      console.log(action.payload);
    },
    [insertHotel.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
      console.log(action.payload);
    },
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
  setAllHotels,
} = hostSlice.actions;

export default hostSlice.reducer;
