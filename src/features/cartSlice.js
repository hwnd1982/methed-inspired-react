import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ORDER_URL } from "../const";

const cartItems = JSON.parse(localStorage.getItem('inspired-cart')) || [];

export const sendOrder = createAsyncThunk(
  'cart/sendOrder',
  async (data) => {
    const url = new URL(ORDER_URL);

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return await response.json();
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems,
    countItems: cartItems.length,
    totalCount: cartItems.reduce((total, {count}) => total += +count, 0),
    orderStatus: 'idle',
    order: {},
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const {id, color, size, count} = action.payload;
      const item = state.cartItems.find(item => 
        item.id === id && item.color === color && item.size === size
      );

      if (item) {
        item.count = count;
      } else {
        state.cartItems.push({id, color, size, count});
        state.countItems = state.cartItems.length;
      }

      state.totalCount = state.cartItems.reduce((total, {count}) => total += +count, 0);
      localStorage.setItem('inspired-cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const {id, color, size} = action.payload;
      const itemIndex = state.cartItems.findIndex(item => 
        item.id === id && item.color === color && item.size === size
      );
  
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
        state.countItems = state.cartItems.length;
      } 
  
      state.totalCount = state.cartItems.reduce((total, {count}) => total += +count, 0);
      localStorage.setItem('inspired-cart', JSON.stringify(state.cartItems));
    },
    clearCert(state) {
      state.cartItems = [];
      state.countItems = 0;
      state.totalCount = 0;
      state.orderStatus = 'idle';
      state.order = {};
      state.error = null;
      localStorage.setItem('inspired-cart', JSON.stringify(state.cartItems));
    }
  },
  extraReducers: builder => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.orderStatus = "loading";
        state.order = {};
        state.error = null;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.orderStatus = "success";
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.error = action.error.message;
        state.orderStatus = "failed";
      });
  }
});

export const { addToCart, removeFromCart, clearCert } = cartSlice.actions;

export default cartSlice.reducer;
