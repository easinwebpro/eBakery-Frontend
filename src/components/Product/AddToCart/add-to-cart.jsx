import React from 'react'
import { Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addCartItem } from 'store/cartSlice';
import { IconBasket, IconMoodSad } from '@tabler/icons';

export const AddToCart = ({ product }) => {

    const dispatch = useDispatch();
    // const carts = useSelector((state) => state.cartItems.carts);

    const disabled = product?.stock === 0;

    const addToCart = () => {
        dispatch(addCartItem(product));
        toast.success('Product Added Successfully');
    }


    return (
        <div>
            <Button onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                addToCart()
            }}
                disabled={disabled} radius="lg" fullWidth variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                {disabled !== true ? <IconBasket size={20} stroke={2} /> : <IconMoodSad size={20} stroke={2} />} {disabled !== true ?
                    <span style={{ marginLeft: '5px' }}>Add to Cart</span>
                    :
                    <span style={{ marginLeft: '5px' }} >Out of Stock</span>}
            </Button>
        </div>
    )
};