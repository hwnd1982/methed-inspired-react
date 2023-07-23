import { createSlice } from "@reduxjs/toolkit";

const statusServerSlice = createSlice({
  name: 'statusServer',
  initialState: {
    status: true,
    request: true,
  },
  reducers: {
    setStatusServer(state, action) {
      state.status = action.payload;
    },
    setRequestStatusServer(state, action) {
      state.request = action.payload;
    },
  }
})

export const  {setStatusServer, setRequestStatusServer} = statusServerSlice.actions;

export default statusServerSlice.reducer;
