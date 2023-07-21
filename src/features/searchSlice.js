import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isOpened: false,
    query: '',
  },
  reducers: {
    toggleSearch: (state) => {
      state.isOpened = !state.isOpened;
    },
    setSearchQuery: (state, actions) => {
      state.query = actions.payload;
    },
    resetSearch: (state) => {
      state.isOpened = false;
      state.query = ''; 
    }
  }
})

export const  {toggleSearch, setSearchQuery, resetSearch} = searchSlice.actions;

export default searchSlice.reducer;
