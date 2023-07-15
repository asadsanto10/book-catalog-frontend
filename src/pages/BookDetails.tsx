const BookDetails = () => {
	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:items-start">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<img
							className="object-cover object-center rounded"
							alt="hero"
							src="https://dummyimage.com/720x600"
						/>
					</div>
					<div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">
							Before they sold out
						</h1>
						<div>
							<h4 className="title-font text-md mb-2 text-gray-500">
								by <span className="text-indigo-500 font-medium">asad</span>
							</h4>
							<h4 className="title-font text-md mb-2 text-gray-500">
								Publication Date: <span className="text-indigo-500 font-medium">30/02/2023</span>
							</h4>

							<div className="mb-4">
								<span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
									Genre
								</span>
							</div>
						</div>
						<p className="mb-8 leading-relaxed">
							Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed
							tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
							authentic tumeric truffaut hexagon try-hard chambray.
						</p>
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
				</div>
			</section>
		</div>
	);
};

export default BookDetails;
