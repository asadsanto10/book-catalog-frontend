import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/label-has-associated-control */
const RegisterForm = () => {
	return (
		<form className="space-y-4 md:space-y-6" action="#">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
					Your email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					placeholder="name@company.com"
					required
				/>
			</div>
			<div>
				<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
					Password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="••••••••"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					required
				/>
			</div>

			<button
				type="submit"
				className="w-full bg-indigo-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>
				Create an account
			</button>
			<p className="text-sm font-light text-gray-500">
				Already have an account?{' '}
				<Link to="/login" className="font-medium text-primary-600 hover:underline">
					Login here
				</Link>
			</p>
		</form>
	);
};

export default RegisterForm;
