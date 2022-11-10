import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import auth from './isAuth';
import productSlice from './productSlice';
import { productsApi } from 'store/services/productsApi';
import { categoriesApi } from 'store/services/categoriesApi';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        product: productSlice,
    },

    middleware: (gDM) => gDM().concat(productsApi.middleware),
});

setupListeners(store.dispatch);