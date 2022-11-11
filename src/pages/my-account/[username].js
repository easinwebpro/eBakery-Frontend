import React from 'react';
import { useRouter } from 'next/router'

const myAccountDetails = () => {
    const router = useRouter()
    const {username} = router.query;
    console.log(username)

    return (
        <div>
            <h4>{username}</h4>
        </div>
    )
}

export default myAccountDetails;
