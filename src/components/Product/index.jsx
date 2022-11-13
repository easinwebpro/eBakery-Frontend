import React from 'react';
import Link from 'next/link.js';
import { ProductCard } from './ProductCard';
import { useSelector } from 'react-redux';

export const Product = ({ product }) => {

    const carts = useSelector((state) => state.cartItems.carts);

    return (
        <div>
            <Link href={`/product/${product?.slug}`} passHref>
                <a style={{ textDecoration: 'none' }}>
                    <ProductCard product={product}  carts={carts} />
                </a>
            </Link>
        </div>
    )
};
