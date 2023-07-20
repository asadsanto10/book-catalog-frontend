import { IReview } from '../types/interface';

interface IProps {
	reviewData: IReview;
}
const BookComents = ({ reviewData }: IProps) => {
	return (
		<div className="flex justify-center align-middle border-t py-4">
			<img
				alt="blog"
				src="https://dummyimage.com/104x104"
				className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
			/>
			<span className="flex-grow flex flex-col pl-4">
				<span className="title-font font-medium text-gray-900">{reviewData.description}</span>
				{/* <span className="text-gray-400 text-xs tracking-widest mt-0.5">By adsad</span> */}
			</span>
		</div>
	);
};

export default BookComents;
