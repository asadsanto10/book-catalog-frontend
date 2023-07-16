const BookComents = () => {
	return (
		<div className="inline-flex items-center border-t py-4">
			<img
				alt="blog"
				src="https://dummyimage.com/104x104"
				className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
			/>
			<span className="flex-grow flex flex-col pl-4">
				<span className="title-font font-medium text-gray-900">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea culpa itaque incidunt
					illum tempore expedita dicta molestias, consequatur, veritatis ipsam accusantium aperiam
					sunt quibusdam facere? Laborum, nisi? Voluptatum, eos!
				</span>
				<span className="text-gray-400 text-xs tracking-widest mt-0.5">By Santo</span>
			</span>
		</div>
	);
};

export default BookComents;
