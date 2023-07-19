/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import Filter from '../components/Filter';
import SearchFiled from '../components/SearchFiled';
import Error from '../components/ui/Error';

import { useGetAllBooksQuery } from '../redux/features/book/bookAPI';
import { IBook, IErrorResponse } from '../types/interface';

const AllBooks = () => {
	const { data, isLoading, error, isError } = useGetAllBooksQuery(undefined, {
		refetchOnMountOrArgChange: true,
	});

	return (
		<section className="text-gray-600 body-font overflow-hidden">
			<div className="container px-5 py-10 mx-auto">
				<div className="grid grid-cols-3 gap-4 mb-10">
					<SearchFiled />
					<Filter />

					<div className="col-span-1 flex items-center">
						<Link
							to="/add-book"
							className="disabled:bg-indigo-400 bg-indigo-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Add new book
						</Link>
					</div>
				</div>

				<div className="-my-8 divide-y-2 divide-gray-100">
					{isError && <Error message={(error as IErrorResponse).data?.message} />}

					{isLoading && <div>Loading...</div>}
					{!isLoading &&
						data?.status &&
						data?.data.map((items: IBook) => <BookCard key={items?.id} book={items} />)}
				</div>
			</div>
		</section>
	);
};

export default AllBooks;
