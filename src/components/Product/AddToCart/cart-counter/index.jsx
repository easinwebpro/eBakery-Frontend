import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemWithQuantity, removeItemQuantity } from 'store/cartSlice';
import { NumberInput, NumberInputHandlers, ActionIcon } from '@mantine/core';
import toast from 'react-hot-toast';
import { IconPlus, IconMinus } from '@tabler/icons';

import { useStyles } from './cart-counter.styles.js';

export const CartCounter = ({ product }) => {

    const dispatch = useDispatch();

    const carts = useSelector((state) => state.cartItems.carts);

    const addProductQuantity = () => {
        dispatch(addItemWithQuantity(product.id));
        toast.success('Product Quantity Added');
    }
    const removeProductQuantity = () => {
        dispatch(removeItemQuantity(product.id));
        toast.success('Product Quantity Removed');
    }

    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <ActionIcon
                size={28}
                variant="transparent"
                onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    removeProductQuantity()
                }}
                disabled={false}
                className={classes.control}
                onMouseDown={(event) => event.preventDefault()}
            >
                <IconMinus size={20} stroke={2} />
            </ActionIcon>

            <NumberInput
                variant="unstyled"
                value={carts[product.id].quantity}
                classNames={{ input: classes.input }}
                onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation();
                }}
            />

            <ActionIcon
                size={28}
                variant="transparent"
                onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation();
                    addProductQuantity()
                }}
                disabled={false}
                className={classes.control}
                onMouseDown={(event) => event.preventDefault()}
            >
                <IconPlus size={20} stroke={2} />
            </ActionIcon >
        </div >
    );
};
