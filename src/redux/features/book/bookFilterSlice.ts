/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchTerm: '',
	publicationDate: '',
	genre: '',
};

const bookFilterSlice = createSlice({
	name: 'bookFilter',
	initialState,
	reducers: {
		filterSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
		filterPublicationDate: (state, action) => {
			state.publicationDate = action.payload;
		},
		filtergenre: (state, action) => {
			state.genre = action.payload;
		},
	},
});

export default bookFilterSlice;
export const { filterSearchTerm, filterPublicationDate, filtergenre } = bookFilterSlice.actions;
