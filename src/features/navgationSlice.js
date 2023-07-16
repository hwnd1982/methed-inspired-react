import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CATEGOY_URL, getData } from "../const";

export const fetchNavgation = createAsyncThunk(
  'navgation/fetchNavgation',
  async () => await getData(CATEGOY_URL),
);

const navgationSlice = createSlice({
  name: 'navigation',
  initialState: {
    gender: null,
    list: {},
    genderList: [],
    status: 'idle',
    error: null
  },
  reducers: {
    setActiveGender: (state, action) => {
      state.gender = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchNavgation.pending, (state) => {
      state.status = 'loading';
      // state.list = {};
      // state.genderList = [];
      state.error = null;
    })
    .addCase(fetchNavgation.fulfilled, (state, action) => {
      const genderList = Object.keys(action.payload);

      state.status = 'success';
      state.list = action.payload;
      state.genderList = genderList;
      state.gender = state.gender || genderList[0];
    })
    .addCase(fetchNavgation.rejected, (state, action) => {
      state.status = 'failed',
      state.error = action.error.message;
    });
  }
});

export const { setActiveGender } = navgationSlice.actions;

export default navgationSlice.reducer;
