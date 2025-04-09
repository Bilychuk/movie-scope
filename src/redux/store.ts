import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { themeReducer } from './theme/slice';
import { moviesReducer } from './movies/slice';
import { favoritesReducer } from './favorites/slice';
import { castReducer } from './cast/slice';

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
import { reviewsReducer } from './reviews/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['darkMode'],
};

const moviesPersistConfig = {
  key: 'movies',
  storage,
  whitelist: ['list'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  theme: persistReducer(themePersistConfig, themeReducer),
  movies: persistReducer(moviesPersistConfig, moviesReducer),
  favorites: favoritesReducer,
  cast: castReducer,
  reviews: reviewsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
