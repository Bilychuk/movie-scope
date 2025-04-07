import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { themeReducer } from './theme/slice';
import { moviesReducer } from './movies/slice';
import { favoritesReducer } from './favorites/slice';
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

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['list'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    movies: persistReducer(moviesPersistConfig, moviesReducer),
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
