import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './api/apiSlice';
import authSlice from './features/auth/authSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],
};

// main reducers
const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
	auth: authSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: import.meta.env.MODE !== 'production',
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares({ serializableCheck: false }).concat(apiSlice.middleware),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
