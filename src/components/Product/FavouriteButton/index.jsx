import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useStyles } from './favourite.styles'
import { IconHeartPlus, IconHeart } from '@tabler/icons';
import { addFavorite, removeFavorite } from 'store/favoriteItemSlice';

export const FavouriteBtn = ({ product }) => {

    const { classes } = useStyles();
    const dispatch = useDispatch();
    const favorite_items = useSelector((state) => state.favorite_items.favorite_list);

    // add to favorite
    const addToFavoriteItem = () => {
        dispatch(addFavorite(product));
        toast.success('Product Added Wishlist');
    };

    // remove Favorite
    const removeFavoriteItem = () => {
        dispatch(removeFavorite(product.id));
        toast.success('Product remove Wishlist');
    };


    return (
        <div className={classes.favorite_icon}>
            <button className={classes.favorite_icon_btn} onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                if (favorite_items[product?.id]) {
                    removeFavoriteItem()
                } else {
                    addToFavoriteItem()
                }
            }}>
                {
                    favorite_items[product?.id] ?
                        <IconHeart className={classes.favorite_icon_color} size={25} stroke={2} fill="rgb(255, 4, 0)" />
                        :
                        <IconHeartPlus className={classes.favorite_icon_color} size={25} stroke={2} />

                }
            </button>
        </div>
    )
};
