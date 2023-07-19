import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

// const saveReduxState = (state) => localStorage.setItem('preloaded-state', JSON.stringify(state));
// const loadReduxState = JSON.parse(localStorage.getItem('preloaded-state')) || {};

const store = configureStore({
  reducer: rootReducer,
  // preloadedState: loadReduxState,
  devTools: import.meta.env.DEV,
});



// store.subscribe(()=> saveReduxState(store.getState()));

export default store;
