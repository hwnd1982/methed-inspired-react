import { createSlice } from "@reduxjs/toolkit";

const cartItems = JSON.parse(localStorage.getItem('inspired-cart')) || [];


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems,
    countItems: cartItems.length,
    totalCount: cartItems.reduce((total, {count}) => total += +count, 0),
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
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
