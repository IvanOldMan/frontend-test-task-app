import { configureStore } from '@reduxjs/toolkit';
import RequestReducer from '../entities/request/model/slice.ts';

export const store = configureStore({
  reducer: {
    requests: RequestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
