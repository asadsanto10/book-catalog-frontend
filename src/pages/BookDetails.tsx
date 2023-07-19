import { useParams } from 'react-router-dom';
import BookComents from '../components/BookComents';
import BookCommentsForm from '../components/BookCommentsForm';
import Error from '../components/ui/Error';
import { useGetBookByIdQuery } from '../redux/features/book/bookAPI';
import { IErrorResponse } from '../types/interface';

/* eslint-disable jsx-a11y/label-has-associated-control */
const BookDetails = () => {
	const { bookId } = useParams();

	const { data, isLoading, error, isError } = useGetBookByIdQuery(bookId, {
		refetchOnMountOrArgChange: true,
	});

	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:items-start">
					{isLoading && <div>Loading...</div>}
					{isError && <Error message={(error as IErrorResponse).data?.message} />}
					{!isLoading && data?.status && (
						<>
							<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
								<img
									className="object-cover object-center rounded"
									alt="hero"
									src="https://dummyimage.com/720x600"
								/>
							</div>
							<div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
								<h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
									{data?.data.title}
								</h1>
								<div>
									<h4 className="title-font text-md mb-2 text-gray-500">
										by <span className="text-indigo-500 font-medium">{data?.data?.author}</span>
									</h4>
									<h4 className="title-font text-md mb-2 text-gray-500">
										Publication Date:{' '}
										<span className="text-indigo-500 font-medium">
											{new Date(data?.data?.publicationDate).toLocaleDateString()}
										</span>
									</h4>

									<div className="mb-4">
										<span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
											{data?.data?.genre}
										</span>
									</div>
								</div>
								<p className="mb-8 leading-relaxed">{data?.data?.description}</p>
								<div className="flex justify-center">
									<button
										type="button"
										className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
									>
										Edit
									</button>

									<button
										type="button"
										className="ml-4 inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-800 rounded text-lg"
									>
										Delete
									</button>
								</div>
							</div>
						</>
					)}
				</div>
				<div className="container mx-auto">
					<BookCommentsForm />

					<BookComents />
					<BookComents />
					<BookComents />
					<BookComents />
					<BookComents />
				</div>
			</section>
		</div>
	);
};

export default BookDetails;
