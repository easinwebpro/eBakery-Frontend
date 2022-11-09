import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import auth from './isAuth';
import productSlice from './productSlice';
import { productsApi } from 'store/services/productsApi';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        product: productSlice,
    },

    middleware: (gDM) => gDM().concat(productsApi.middleware),
});

setupListeners(store.dispatch);