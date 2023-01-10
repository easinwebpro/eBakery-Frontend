import React from 'react';
import { Product_Cart } from 'components/Product/Product_Cart';

export const Cart = ({ products }) => {
  return (
    <div>
      {
        Object.keys(products).length > 0 ?
          <Product_Cart products={products} />
          :
          <h3>Cart is Empty</h3>
      }
    </div>
  )
};