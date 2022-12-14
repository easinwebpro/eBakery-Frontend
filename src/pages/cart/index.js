import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { Cart } from 'components/Cart';

const cart = () => {

    const ProductInCarts = useSelector((state) => state.cartItems.carts);

    return (
        <Layout>
            <div><Toaster position="top-right" reverseOrder={false} /></div>
            <h3>Cart Pages</h3>
            {/* <Grid gutter="xs">
                {
                    products?.map((product, ind) => (
                        <Grid.Col sm={6} md={4} lg={3} key={ind}> 
                            <Product product={ProductInCarts[product]} /> 
                        </Grid.Col>
                    ))
                }
            </Grid> */}
             <Cart products={ProductInCarts}/>

        </Layout>
    )
}

export default cart;
