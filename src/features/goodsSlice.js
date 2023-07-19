import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const";

export const fetchGenderGoods = createAsyncThunk(
  "goods/fetchGenderGoods",
  async (gender) => {
    const url = new URL(GOODS_URL);
    
    url.searchParams.append('gender', gender);
    
    return await (await fetch(url)).json();
  }
);

export const fetchCategoryGoods = createAsyncThunk(
  "goods/fetchCategoryGoods",
  async (param) => {
    const url = new URL(GOODS_URL);

    for(const key in param) {
      url.searchParams.append(key, param[key]);
    }
    
    return await (await fetch(url)).json();
  }
);

export const fetchGoodsAll = createAsyncThunk(
  "goods/fetchGoodsAll",
  async (param) => {
    const url = new URL(GOODS_URL);

    for(const key in param) {
      url.searchParams.append(key, param[key]);
    }
    
    url.searchParams.append('count', 'all');

    return await (await fetch(url)).json();
  }
);

const goodsSlice = createSlice({
  name: "goods",
  initialState: {
    status: "idle",
    list: [],
    error: null,
    page: 1,
    pages: 0,
    totalCount: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGenderGoods.pending, (state) => {
        state.status = "loading";
        state.list = [];
        state.error = null;
        state.pages = 0;
        state.totalCount = 0;
      })
      .addCase(fetchGenderGoods.fulfilled, (state, action) => {
        state.list = action.payload;
        state.pages = 0;
        state.totalCount = 0;
        state.status = "success";
      })
      .addCase(fetchGenderGoods.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(fetchCategoryGoods.pending, (state) => {
        state.status = "loading";
        state.list = [];
        state.error = null;
        state.pages = 0;
        state.totalCount = 0;
      })
      .addCase(fetchCategoryGoods.fulfilled, (state, action) => {
        state.list = action.payload.goods;
        state.pages = action.payload.pages;
        state.totalCount = action.payload.totalCount;
        state.status = "success";
      })
      .addCase(fetchCategoryGoods.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(fetchGoodsAll.pending, (state) => {
        state.status = "loading";
        state.list = [];
        state.error = null;
        state.pages = 0;
        state.totalCount = 0;
      })
      .addCase(fetchGoodsAll.fulfilled, (state, action) => {
        state.list = action.payload;
        state.pages = 0;
        state.totalCount = 0;
        state.status = "success";
      })
      .addCase(fetchGoodsAll.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
    }
})

export const { setPage } = goodsSlice.actions;

export default goodsSlice.reducer;
