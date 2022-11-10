import React from 'react';
import Layout from 'components/Layout/Layout';
import { useGetProductsDataQuery } from 'store/services/productsApi';
import { Product } from 'components/Product';
import { Grid } from '@mantine/core';
import { product_dtos } from 'utils/helpers/product_dtos';

const shops = () => {
    const { data, isLoading, isError, status } = useGetProductsDataQuery();
    const products = product_dtos(data);
    // console.log(products)

    return (
        <Layout loader={isLoading}>
            <h3>Shop Pages</h3>
            <Grid gutter="xs">
                {
                    products?.map((product, ind) => (
                        <Grid.Col sm={6} md={4} lg={3} key={ind}> <Product product={product} /> </Grid.Col>
                    ))
                }
            </Grid>
        </Layout>
    )
}

export default shops;
