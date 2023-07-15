/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import store from './redux/store';
import router from './router/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <App /> */}
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</React.StrictMode>
);
