import { createSlice } from '@reduxjs/toolkit';
import { setItemsStorage, getItemsStorage } from 'utils/Storage';

const items = getItemsStorage('cart_items');

const initialState = {
    carts: { ...items },
    uniqueItems: 0,
}

export const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {

        addCartItem: (state, action) => {
            const data = action.payload;
            if (!data) { return false; }
            const cart = {
                id: data.id,
                price: data.price,
                quantity: 1,
                stock: data.stock,
            };
            state.carts[data.id] = cart;
        },

        getItemFromCart: (state, action) => {
            const product_id = action.payload;
            let cart = state.carts[product_id];
            if (!cart) { return false; }
            return cart;
        },

        removeItemToCart: (state, action) => {
            const product_id = action.payload;
            if (!state.carts[product_id]) { return false; }
            delete state.carts[product_id];
            // setItemsStorage('favorite_items', state.favorite_list);
        },

        addItemWithQuantity: (state, action) => {
            const product_id = action.payload;
            let cart = state.carts[product_id];

            if (cart.quantity <= 0)
                throw new Error("cartQuantity can't be zero or less than zero");

            if (cart.quantity >= 1) {
                cart.quantity += 1;
                state.carts[product_id] = cart;
            }

        },

        removeItemOrQuantity: (state, action) => {
            const product_id = action.payload;
            let cart = state.carts[product_id];
            if (!cart) { return false; }
            if (cart.quantity <= 0) {
                delete state.carts[product_id]
            }
            cart.quantity -= 1;
            state.carts[product_id] = cart;

        },

        calculateUniqueItems: (state, action) => {
            const uniqueItemsInCart = Object.keys(state.carts).length;
            state.uniqueItems = uniqueItemsInCart;
        }

    },
})

// Action creators are generated for each case reducer function
export const { setProduct } = cartSlice.actions

export default cartSlice.reducer;