/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCreateReviewMutation } from '../redux/features/review/reviewAPI';
import { useAppSelector } from '../redux/hook';
import { IErrorResponse, IReview } from '../types/interface';
import Error from './ui/Error';

interface Iprops {
	bookId: string;
}
const BookCommentsForm = ({ bookId }: Iprops) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<IReview>>();
	const [createReview, { data, error, isError }] = useCreateReviewMutation();

	const { accessToken, isLoggedIn } = useAppSelector((state) => state.auth);
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<Partial<IReview>> = (inputData: Partial<IReview>): void => {
		if (!accessToken && !isLoggedIn) {
			navigate('/login');
		} else {
			createReview({ bookId, data: { ...inputData } });
		}
	};

	useEffect(() => {
		if (data?.status) {
			reset();
			toast.success(data?.message);
		}
	}, [data?.message, data?.status, reset]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-8">
				<div className="">
					<label htmlFor="commnets" className="leading-7 text-sm text-gray-600">
						Write something here
					</label>
					<textarea
						rows={5}
						placeholder="write here..."
						id="commnets"
						className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						{...register('description', { required: 'Description is required' })}
					/>
					{errors.description && <p className="text-red-400">{errors.description.message}</p>}
				</div>
				<button
					type="submit"
					className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
				>
					Submit
				</button>
				<div className="mt-5">
					{isError && <Error message={(error as IErrorResponse).data?.message} />}
				</div>
			</div>
		</form>
	);
};

export default BookCommentsForm;
