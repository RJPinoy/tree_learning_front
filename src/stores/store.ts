import { configureStore } from '@reduxjs/toolkit';
import { inputSlice } from './slices/inputSlice';
import { authSlice } from './slices/authSlice';
import api from '../api/endpoints/auth';

export const store = configureStore({
    reducer: {
        inputs: inputSlice.reducer,
        auth: authSlice.reducer,
        api: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;