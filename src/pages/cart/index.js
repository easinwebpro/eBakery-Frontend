import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import { Product } from 'components/Product';
import { Toaster } from 'react-hot-toast';
import { Product_list } from 'components/Product/Product_list';

const cart = () => {

    const ProductInCarts = useSelector((state) => state.cartItems.carts);
    const products = Object.keys(ProductInCarts);
    console.log(products , ProductInCarts);

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
             <Product_list products={ProductInCarts}/>

        </Layout>
    )
}

export default cart;
