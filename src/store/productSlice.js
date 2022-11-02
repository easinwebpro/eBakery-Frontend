import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            const data = action.payload;
            state.product = data;
        },

    },
})

// Action creators are generated for each case reducer function
export const { setProduct } = productSlice.actions

export default productSlice.reducer;