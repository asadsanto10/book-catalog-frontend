/* eslint-disable react/no-array-index-key */
import { ChangeEvent } from 'react';
import { filterPublicationDate, filtergenre } from '../redux/features/book/bookFilterSlice';
import { useAppDispatch } from '../redux/hook';
import { IBook } from '../types/interface';

/* eslint-disable jsx-a11y/label-has-associated-control */

interface IFilterItemProps {
	filterItem: IBook[];
}
const Filter = ({ filterItem }: IFilterItemProps) => {
	const dispatch = useAppDispatch();
	const handelGenre = (e: ChangeEvent<HTMLSelectElement>) => {
		const genre = e.target.value;
		dispatch(filtergenre(genre));
	};

	const handelPublicationDate = (e: ChangeEvent<HTMLSelectElement>) => {
		const year = e.target.value;
		dispatch(filterPublicationDate(year));
	};

	return (
		<div className="flex justify-start items-center">
			<div className="flex items-center mr-4">
				<label htmlFor="genre" className="mr-2">
					Genre:
				</label>
				<select
					onChange={handelGenre}
					id="genre"
					className="p-2 border border-gray-300 rounded-md focus:outline-none capitalize"
				>
					<option>All</option>
					{[...new Set(filterItem.map(({ genre }) => genre))].map((item, i) => (
						<option key={i} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
			<div className="flex items-center">
				<label htmlFor="year" className="mr-2">
					Publication Year:
				</label>
				<select
					onChange={handelPublicationDate}
					id="year"
					className="p-2 border border-gray-300 rounded-md focus:outline-none"
				>
					<option>All</option>
					{filterItem.map(({ publicationDate, id }) => (
						<option key={id} value={new Date(publicationDate).getFullYear()}>
							{new Date(publicationDate).getFullYear()}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Filter;
