import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COLORS_URL, getData } from "../const";

export const fetchColors = createAsyncThunk(
  'colors/fetchColors',
  async () => await getData(COLORS_URL),
);

const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    list: [],
    status: 'idle',
    error: null
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchColors.pending, (state) => {
      state.status = 'loading';
      // state.list = [];
      state.error = null;
    })
    .addCase(fetchColors.fulfilled, (state, action) => {
      state.status = 'success';
      state.list = action.payload;
    })
    .addCase(fetchColors.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
});

export default colorsSlice.reducer;
