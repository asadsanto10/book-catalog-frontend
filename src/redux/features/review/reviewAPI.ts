import { apiSlice } from '../../api/apiSlice';

const reviewSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getReviewBookById: builder.query({
			query: (bookId: string) => ({
				url: `review/${bookId}`,
				method: 'GET',
			}),
			providesTags: ['review'],
		}),
		createReview: builder.mutation({
			query: ({ bookId, data }) => ({
				url: `/review/${bookId}`,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['review'],
		}),
	}),
});

export const { useCreateReviewMutation, useGetReviewBookByIdQuery } = reviewSlice;
