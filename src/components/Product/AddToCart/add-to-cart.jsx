import React from 'react'
import { Button } from '@mantine/core';
import { IconBasket, IconMoodSad } from '@tabler/icons';

export const AddToCart = ({ addToCart, disabled = false }) => {
    return (
        <div>
            <Button onClick={() => console.log('Hello!')} disabled={disabled} radius="lg" fullWidth>
                {disabled !== true ? <IconBasket size={20} stroke={2} /> : <IconMoodSad size={20} stroke={2} />} {disabled !== true ? <span style={{marginLeft: '5px'}}>Add to Cart</span> : <span style={{marginLeft: '5px'}} >Out of Stock</span>}
            </Button>
        </div>
    )
};