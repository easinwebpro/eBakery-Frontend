import { createSlice } from '@reduxjs/toolkit';
import {setItemsStorage , getItemsStorage} from 'utils/Storage';

const items = getItemsStorage('favorite_items');

const initialState = {
    favorite_list : {...items},
}

export const favoriteItemSlice = createSlice({
  name: 'favorite_items',
  initialState,
  reducers: {
    addFavorite: (state , actions) => {
        const data  = actions.payload;
        if(!data) { return false; }
        state.favorite_list[data.id] = data;
        setItemsStorage('favorite_items' ,  state.favorite_list);
    },
    removeFavorite: (state , actions) => {
        const id  = actions.payload;
        delete state.favorite_list[id];
        setItemsStorage('favorite_items' ,  state.favorite_list);
    } 
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite , removeFavorite } = favoriteItemSlice.actions;

export default favoriteItemSlice.reducer;