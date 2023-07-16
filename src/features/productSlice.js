import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async id => await (await fetch(`${GOODS_URL}/${id}`)).json()
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    status: "idle",
    data: {},
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
        state.data = {};
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message
      });
    }
})

export default productSlice.reducer;
