import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/auth.slice';
import systemReducer from './slice/system.slice';
import quoteReducer from './slice/quote.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        system: systemReducer,
        quote: quoteReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;