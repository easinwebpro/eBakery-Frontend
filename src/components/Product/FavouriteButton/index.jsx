import React from 'react';
import { useStyles } from './favourite.styles'
import { IconHeartPlus, IconHeart } from '@tabler/icons';

export const FavouriteBtn = () => {

    const { classes } = useStyles();

    return (
        <div className={classes.favorite_icon}>
            <button className={classes.favorite_icon_btn} onClick={(event) => {
                if (true) {
                    // removeFavoriteItem(event, play_list_item?.id);
                } else {
                    // addToFavoriteItem(event, play_list_item);
                }
            }}>
                {
                    true ?
                        <IconHeartPlus className={classes.favorite_icon_color} size={25} stroke={2} /> :
                        <IconHeart className={classes.favorite_icon_color} size={25} stroke={2} fill="rgb(255, 4, 0)"/>
                }
            </button>
        </div>
    )
};
