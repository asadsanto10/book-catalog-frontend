export interface IErrorResponse {
	data?: {
		message?: string;
	};
}

export interface IBook {
	author: string;
	createdAt?: string;
	description: string;
	genre: string;
	id?: string;
	publicationDate: string | number;
	title: string;
	updatedAt?: string;
	userId?: string;
}
