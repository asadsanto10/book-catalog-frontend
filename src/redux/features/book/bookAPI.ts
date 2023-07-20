import type { IBook } from '../../../types/interface';
import { apiSlice } from '../../api/apiSlice';

interface IQueryData {
	searchTerm?: string;
	publicationDate?: string;
	genre?: string;
}

const bookSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllBooks: builder.query({
			query: (queryData: IQueryData) => {
				let query = '';

				if (queryData.searchTerm) {
					query = `?searchTerm=${queryData.searchTerm}`;
				}

				if (queryData.genre && queryData.genre !== 'All') {
					query = `?genre=${queryData.genre}`;
				}

				if (queryData.publicationDate && queryData.publicationDate !== 'All') {
					query = `?publicationDate=${queryData.publicationDate}`;
				}
				return {
					url: `/book/${query}`,
					method: 'GET',
				};
			},
			providesTags: ['book'],
		}),
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

		getBookById: builder.query({
			query: (bookId: string) => ({
				url: `book/${bookId}`,
				method: 'GET',
			}),
		}),
		deleteBook: builder.mutation({
			query: (bookId: string) => ({
				url: `/book/${bookId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['book'],
		}),
	}),
});

export const {
	useGetAllBooksQuery,
	useUpdateBookMutation,
	useCreateBookMutation,
	useGetBookByIdQuery,
	useDeleteBookMutation,
} = bookSlice;
