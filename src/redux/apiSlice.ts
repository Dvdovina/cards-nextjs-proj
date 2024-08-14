import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cat-fact.herokuapp.com' }), 
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => '/facts',
    }),
  }),
});

export const { useGetItemsQuery } = apiSlice;

