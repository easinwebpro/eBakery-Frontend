import React from 'react';
import { useRouter } from 'next/router'

const productDetails = () => {
    const router = useRouter()
    const { slug } = router.query;

    return (
        <div>
            <h4>{slug}</h4>
        </div>
    )
}

export default productDetails;
