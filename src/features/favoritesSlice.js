import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('inspired-favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload.id;
      const index = state.indexOf(id);

      if (index === -1) {
        state.push(id);
      } else {
        state.splice(index, 1);
      }

      localStorage.setItem('inspired-favorites', JSON.stringify(state));
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
