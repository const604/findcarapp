import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload.id
      );
      state.favorites.push(action.payload);
      // state.favorites = [...state.favorites, action.payload];
    },
    deleteFavorites(state, action) {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload.id
      );
    },
  },
});

export const { addFavorites, deleteFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
