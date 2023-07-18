import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import loginSlice from './features/login/loginSlice';

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: loginSlice.reducer,
	},
	devTools: import.meta.env.MODE !== 'production',
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares({ serializableCheck: false }).concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
