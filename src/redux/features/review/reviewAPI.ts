import { apiSlice } from '../../api/apiSlice';

const reviewSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createReview: builder.mutation({
			query: ({ bookId, data }) => ({
				url: `/book/${bookId}`,
				method: 'POST',
				body: data,
			}),
		}),
		getReviewBookById: builder.query({
			query: (bookId: string) => ({
				url: `review/${bookId}`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useCreateReviewMutation, useGetReviewBookByIdQuery } = reviewSlice;
