import type { LoginFormInputs } from '../../../components/LoginForm';
import type { RegisterFormInputs } from '../../../components/RegisterForm';
import { apiSlice } from '../../api/apiSlice';

const authAPI = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: (data: RegisterFormInputs) => ({
				url: '/auth/signup',
				method: 'POST',
				body: data,
			}),
		}),
		loginUser: builder.mutation({
			query: (data: LoginFormInputs) => ({
				url: '/auth/login',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authAPI;
