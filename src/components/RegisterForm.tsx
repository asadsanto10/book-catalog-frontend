/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useRegisterUserMutation } from '../redux/features/auth/authAPI';
import { IErrorResponse } from '../types/interface';
import Error from './ui/Error';
import Success from './ui/Success';

export interface RegisterFormInputs {
	email: string;
	password: string;
}
const RegisterForm: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegisterFormInputs>();

	const [registerUser, { data, isLoading, error, isError }] = useRegisterUserMutation();

	const onSubmit: SubmitHandler<RegisterFormInputs> = (inputData: RegisterFormInputs): void => {
		registerUser(inputData);
	};
	useEffect(() => {
		if (data?.status) {
			reset();
		}
	}, [data?.status, reset]);
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
					Your email
				</label>
				<input
					type="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					placeholder="name@company.com"
					{...register('email', { required: 'Email is required' })}
				/>
				{errors.email && <p className="text-red-400">{errors.email.message}</p>}
			</div>
			<div>
				<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
					Password
				</label>
				<input
					type="password"
					id="password"
					placeholder="••••••••"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
					{...register('password', { required: 'Password is required' })}
				/>
				{errors.password && <p className="text-red-400">{errors.password.message}</p>}
			</div>

			<button
				disabled={isLoading}
				type="submit"
				className="w-full disabled:bg-indigo-400 bg-indigo-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>
				Create an account
			</button>

			{isError && <Error message={(error as IErrorResponse).data?.message} />}
			{data?.status && <Success message={data?.message} />}
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
