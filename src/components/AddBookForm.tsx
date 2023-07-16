/* eslint-disable jsx-a11y/label-has-associated-control */
const AddBookForm = () => {
	return (
		<form>
			<div className="flex flex-wrap -m-2">
				<div className="p-2 w-1/2">
					<div className="relative">
						<label htmlFor="title" className="leading-7 text-sm text-gray-600">
							Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div className="p-2 w-1/2">
					<div className="relative">
						<label htmlFor="author" className="leading-7 text-sm text-gray-600">
							Author
						</label>
						<input
							type="text"
							id="author"
							name="author"
							className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div className="p-2 w-1/2">
					<div className="relative">
						<label htmlFor="genre" className="leading-7 text-sm text-gray-600">
							Genre
						</label>
						<input
							type="text"
							id="genre"
							name="genre"
							className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div className="p-2 w-1/2">
					<div className="relative">
						<label htmlFor="publicationDate" className="leading-7 text-sm text-gray-600">
							Publication Date
						</label>
						<input
							type="date"
							id="publicationDate"
							name="publicationDate"
							className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div className="p-2 w-full">
					<div className="relative">
						<label htmlFor="description" className="leading-7 text-sm text-gray-600">
							Description
						</label>
						<textarea
							id="description"
							name="description"
							className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							defaultValue=""
						/>
					</div>
				</div>
				<div className="p-2 w-full">
					<button
						type="submit"
						className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
					>
						<svg
							className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							/>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>
						Create
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddBookForm;
