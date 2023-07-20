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
		updateBook: builder.mutation({
			query: ({ bookId, data }: { bookId: string; data: IBook }) => ({
				url: `/book/${bookId}`,
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: ['book'],
		}),
		getAllBooks: builder.query({
			query: () => ({
				url: '/book',
				method: 'GET',
			}),
			providesTags: ['book'],
		}),
		getBookById: builder.query({
			query: (bookId: string) => ({
				url: `book/${bookId}`,
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useGetAllBooksQuery,
	useUpdateBookMutation,
	useCreateBookMutation,
	useGetBookByIdQuery,
} = bookSlice;
