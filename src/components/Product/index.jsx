import React from 'react';
import { ProductCard } from './ProductCard';

export const Product = ({product}) => {

    return (
        <div>
            <ProductCard product={product}/>
        </div>
    )
};
