import { configureStore } from '@reduxjs/toolkit';
import skipReducer from './slices/skipSlice';

export const store = configureStore({
  reducer: {
    skips: skipReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});