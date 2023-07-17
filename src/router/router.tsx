import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddBook from '../pages/AddBook';
import AllBooks from '../pages/AllBooks';
import BookDetails from '../pages/BookDetails';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <AllBooks />,
			},
			{
				path: '/add-book',
				element: <AddBook />,
			},
			{
				path: '/book-details/:bookId',
				element: <BookDetails />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
