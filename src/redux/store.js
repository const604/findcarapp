import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { carsReducer } from './carslice';
import { favoritesReducer } from './favoritesslice';
import { filterReducer } from './filtersSlice';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const favoritesPersistConfig = {
  key: ['favorites'],
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    filter: filterReducer,
  },
  middleware,
});

export const persistor = persistStore(store);