import { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, Center, Space } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CartCounter } from '../AddToCart/cart-counter';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IconX } from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { removeItemToCart } from 'store/cartSlice';
import { Product_Cart } from '../Product_Cart';

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
    const matches = useMediaQuery('(max-width: 766px)');

    const { classes, cx } = useStyles();

    const removeItemToCartHandler = (productId) => {
        dispatch(removeItemToCart(productId));
    }

    const productsKey = Object.keys(products);

    // const rows = 

    return (
        <ScrollArea>

            {
                !matches ? <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th><div style={{ marginLeft: '100px' }}><Text size="md" weight={700}>Product </Text></div></th>
                            <th><Center><Text size="md" weight={700}> Price </Text> </Center></th>
                            <th><Center><Text size="md" weight={700}> Quantity </Text> </Center></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productsKey.map((ProductId, ind) => {

                                return (
                                    <tr key={ind} >
                                        <td onClick={() => removeItemToCartHandler(ProductId)} style={{ cursor: 'pointer' }}>
                                            <IconX size={20} stroke={4} color="red" />
                                        </td>
                                        <td>
                                            <Group spacing="sm">
                                                <LazyLoadImage
                                                    style={{ borderRadius: '20px' }}
                                                    width="100px"
                                                    height="100px"
                                                    object-fit="cover"
                                                    radius='md'
                                                    src={products[ProductId]?.product_image}
                                                    effect="blur" />

                                                <Text size="sm" weight={700}>
                                                    {products[ProductId]?.title}
                                                </Text>
                                            </Group>
                                        </td>
                                        <td><Center> <Text size="sm" weight={700}>{products[ProductId]?.price} </Text> </Center></td>
                                        <td style={{ width: 140 }}><Center><CartCounter product={products[ProductId]} /> </Center></td>
                                    </tr>
                                );
                            })

                        }</tbody>
                </Table> :

                    <Product_Cart products={products} />
            }

        </ScrollArea>
    );
}