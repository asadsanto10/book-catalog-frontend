/* eslint-disable jsx-a11y/label-has-associated-control */
import BookCard from '../components/BookCard';
import Filter from '../components/Filter';
import SearchFiled from '../components/SearchFiled';

const AllBooks = () => {
	return (
		<section className="text-gray-600 body-font overflow-hidden">
			<div className="container px-5 py-10 mx-auto">
				<div className="grid grid-cols-2 gap-4 mb-10">
					<SearchFiled />

					<Filter />
				</div>

				<div className="-my-8 divide-y-2 divide-gray-100">
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
				</div>
			</div>
		</section>
	);
};

export default AllBooks;
