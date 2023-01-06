import { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, Center, Space } from '@mantine/core';
import { CartCounter } from '../AddToCart/cart-counter';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IconX } from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { removeItemToCart } from 'store/cartSlice';

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                : theme.colors[theme.primaryColor][0],
    },
}));

export const Product_list = ({ products }) => {

    const dispatch = useDispatch();

    const { classes, cx } = useStyles();

    const removeItemToCartHandler = (productId) => {
        dispatch(removeItemToCart(productId));
    }

    const productsKey = Object.keys(products);

    const rows = productsKey.map((key) => {

        return (
            <tr key={key} >
                <td onClick={()=> removeItemToCartHandler(key)} style={{cursor:'pointer'}}>
                    <IconX size={20} stroke={4} color="red" />
                </td>
                <td>
                    <Group spacing="sm">
                        <LazyLoadImage
                            style={{ borderRadius: '20px' }}
                            width="100px"
                            height="100px"
                            objectFit="cover"
                            radius='md'
                            src={products[key]?.product_image}
                            effect="blur" />

                        <Text size="sm" weight={700}>
                            {products[key]?.title}
                        </Text>
                    </Group>
                </td>
                <td><Center> <Text size="sm" weight={700}>{products[key]?.price} </Text> </Center></td>
                <td style={{ width: 140 }}><Center><CartCounter product={products[key]} /> </Center></td>
            </tr>
        );
    });

    return (
        <ScrollArea>
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th><Text size="md" weight={700}>Product </Text></th>
                        <th><Center><Text size="md" weight={700}> Price </Text> </Center></th>
                        <th><Center><Text size="md" weight={700}> Quantity </Text> </Center></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}