import { configureStore } from '@reduxjs/toolkit';
// import auth from './isAuth';
import productSlice from './productSlice';

export const store = configureStore({
    reducer: {
        // auth: auth,
        product: productSlice,
    },
})