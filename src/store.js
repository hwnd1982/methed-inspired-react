import { configureStore } from "@reduxjs/toolkit";
import { setRequestStatusServer, setStatusServer } from "./features/statusServerSlice";
import { rootReducer } from "./rootReducer";



// const saveReduxState = (state) => localStorage.setItem('preloaded-state', JSON.stringify(state));
// const loadReduxState = JSON.parse(localStorage.getItem('preloaded-state')) || {};

const errorMiddleware = (store) => (next) => (action) => {
  if (action.type.endsWith('/pending')) {
    store.dispatch(setRequestStatusServer(true));
  }
  
  if (action.type.endsWith('/rejected')) {
    store.dispatch(setStatusServer(false));
    store.dispatch(setRequestStatusServer(false));
  }

  if (action.type.endsWith('/fulfilled')) {
    store.dispatch(setStatusServer(true));
    store.dispatch(setRequestStatusServer(false));
  }

  return next(action);
};

const store = configureStore({
  reducer: rootReducer,
  // preloadedState: loadReduxState,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), errorMiddleware],
});



// store.subscribe(()=> saveReduxState(store.getState()));

export default store;
