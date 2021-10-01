import React, { useEffect, useState } from 'react';
import useProducts from '../Hooks/UseProduct';

const OrderReview = () => {
    const [products] = useProducts();
               
    return (
        <div>
            {products.length}
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;