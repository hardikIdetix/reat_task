import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const movieTicketAdapter = createEntityAdapter();

const initialState = movieTicketAdapter.getInitialState();

export const movieTicketApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTime: builder.query({
      query: () => '/Ticket',
      transformResponse: (responseData) => {
        return movieTicketAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => [
        { type: 'movies', id: 'LIST' },
        ...result.ids.map((id) => ({ type: 'movies', id })),
      ],
    }),
  }),
});

export const { useGetTimeQuery } = movieTicketApiSlice;

export const selectMovieTicketResult =
  movieTicketApiSlice.endpoints.getTime.select();
export const selectMovieTicketData = createSelector(
  selectMovieTicketResult,
  (movieTicketResult) => movieTicketResult.data
);

export const {
  selectAll: selectAllMovieTicket,
  selectById: selectMovieTicketById,
  selectIds: selectMovieTicketIds,
} = movieTicketAdapter.getSelectors(
  (state) => selectMovieTicketData(state) ?? initialState
);
