import { IBook } from '../types/interface';

interface Iprops {
	book: IBook;
}

const BookCard = ({ book }: Iprops) => {
	const handelDetails = () => {};
	return (
		<div className="py-8 flex flex-wrap md:flex-nowrap">
			<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
				<span className="font-semibold title-font text-gray-700">{book.genre}</span>
				<span className="mt-1 text-gray-500 text-sm">
					{new Date(book.publicationDate).toLocaleDateString()}
				</span>
			</div>
			<div className="md:flex-grow">
				<h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{book.title}</h2>
				<p className="leading-relaxed">{book.description}</p>
				<button
					onClick={handelDetails}
					type="button"
					className="text-indigo-500 cursor-pointer inline-flex items-center mt-4"
				>
					Learn More
					<svg
						className="w-4 h-4 ml-2"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M5 12h14" />
						<path d="M12 5l7 7-7 7" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default BookCard;
