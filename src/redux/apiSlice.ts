import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }), 
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => '/endpoint',
    }),
  }),
});

export const { useGetItemsQuery } = apiSlice;
