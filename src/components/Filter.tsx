/* eslint-disable jsx-a11y/label-has-associated-control */
const Filter = () => {
	return (
		<div className="flex justify-start items-center">
			<div className="flex items-center mr-4">
				<label htmlFor="genre" className="mr-2">
					Genre:
				</label>
				<select id="genre" className="p-2 border border-gray-300 rounded-md focus:outline-none">
					<option>All</option>
					<option value="fiction">Fiction</option>
					<option value="non-fiction">Non-Fiction</option>
					<option value="thriller">Thriller</option>
					{/* Add more genre options here */}
				</select>
			</div>
			<div className="flex items-center">
				<label htmlFor="year" className="mr-2">
					Publication Year:
				</label>
				<select id="year" className="p-2 border border-gray-300 rounded-md focus:outline-none">
					<option>All</option>
					<option value={2023}>2023</option>
					<option value={2022}>2022</option>
					<option value={2021}>2021</option>
					{/* Add more year options here */}
				</select>
			</div>
		</div>
	);
};

export default Filter;
