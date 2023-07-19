import { apiSlice } from '../../api/apiSlice';

const bookSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllBooks: builder.query({
			query: () => ({
				url: '/book',
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetAllBooksQuery } = bookSlice;
