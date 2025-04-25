import { configureStore } from '@reduxjs/toolkit';
import songQueryReducer from './counterSlice';


export const store = configureStore({
  reducer: {
    inputText: songQueryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;