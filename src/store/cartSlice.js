import { createSlice } from '@reduxjs/toolkit';
import { setItemsStorage, getItemsStorage } from 'utils/Storage';

const items = getItemsStorage('cart_items');

const initialState = {
    carts: { ...items },
}

export const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {

        addCartItem: (state, action) => {
            const data = action.payload;
            if (!data) { return false; }
            const cart = {
                id: data?.id,
                title: data?.title,
                product_image: data?.product_image,
                price: data?.price,
                quantity: 1,
                stock: data?.stock,
                slug: data?.slug,
            };

            if (!state.carts[cart.id]) {
                state.carts[cart.id] = cart;
                setItemsStorage('cart_items', state.carts);
            }
        },

        checkItemInCart: (state, action) => {
            const product_id = action.payload;
            let cart = state.carts[product_id];
            if (!cart) { return false; }
            return true;
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

            if (cart.quantity < 1)
                throw new Error("cartQuantity can't be zero or less than zero");

            if (cart.quantity >= 1) {
                cart.quantity += 1;
                // state.carts[product_id] = cart;
                setItemsStorage('cart_items', state.carts);
            }

        },

        removeItemQuantity: (state, action) => {
            const product_id = action.payload;
            let cart = state.carts[product_id];
            if (!cart) { return false; }
            if (cart.quantity === 1) {
                delete state.carts[product_id];
                setItemsStorage('cart_items', state.carts);
            } else {
                cart.quantity -= 1;
                // state.carts[product_id] = cart;
                setItemsStorage('cart_items', state.carts);
            }


        },

        calculateUniqueItems: (state, action) => {
            const uniqueItemsInCart = Object.keys(state.carts).length;
            state.uniqueItems = uniqueItemsInCart;
        }

    },
})

// Action creators are generated for each case reducer function
export const { addCartItem, checkItemInCart, removeItemToCart, addItemWithQuantity, removeItemQuantity, calculateUniqueItems } = cartSlice.actions;

export default cartSlice.reducer;