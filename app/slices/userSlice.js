import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// update user
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    try {
      const responce = await fetch(
        `http://localhost:8080/api/users/${user.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        }
      );
      return await responce.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [updateUser.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [updateUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
