import type { IBook } from '../../../types/interface';
import { apiSlice } from '../../api/apiSlice';

const bookSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createBook: builder.mutation({
			query: (data: IBook) => ({
				url: '/book',
				method: 'POST',
				body: data,
			}),
		}),
		getAllBooks: builder.query({
			query: () => ({
				url: '/book',
				method: 'GET',
			}),
		}),
		getBookById: builder.query({
			query: (bookId: string) => ({
				url: `book/${bookId}`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetAllBooksQuery, useCreateBookMutation, useGetBookByIdQuery } = bookSlice;
