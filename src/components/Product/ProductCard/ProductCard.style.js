import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    price: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    carousel: {
        '&:hover': {
            [`& .${getRef('carouselControls')}`]: {
                opacity: 1,
            },
        },
    },

    carouselControls: {
        ref: getRef('carouselControls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
    },

    carouselIndicator: {
        width: 4,
        height: 4,
        transition: 'width 250ms ease',

        '&[data-active]': {
            width: 16,
        },
    },

    product_card_content_wrapper: {
        margin: '10px 0',
        display: 'flex',
    },
    product_card_title: {
        width: '80%',
        height: '50px',
        overflow: 'hidden',
        // display: 'flex',
        // alignItems: 'center',
        
    },
    product_card_wishlist: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    product_card_footer_wrapper: {
        display: 'flex',
    },
    product_card_price: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px',
        'del': {
            marginLeft: '20px',
        },
    },

    product_card_addtocart: {
        width: '60%',
        padding: '0px 0px 0px 50px',
    },

}));