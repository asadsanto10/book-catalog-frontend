import BookCard from '../components/BookCard';

const AllBooks = () => {
	return (
		<section className="text-gray-600 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
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
