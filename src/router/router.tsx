import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddBook from '../pages/AddBook';
import AllBooks from '../pages/AllBooks';
import BookDetails from '../pages/BookDetails';
import NotFound from '../pages/NotFound';

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
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
