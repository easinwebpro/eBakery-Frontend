import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { API_ENDPOINT } from 'config';


export const categoriesApi = createApi({
    reducerPath: "categoriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_ENDPOINT + '/api/',
    }),
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getCategoryData: builder.query({
            query: () => 'categories?populate=*',
            transformResponse: (res) => res?.data,
            transformErrorResponse: (res) => res.status,
            providesTags: ['Category'],
        }),
        getProductByCategory: builder.query({
            query: (queryString) => `products?${queryString}`,
            transformResponse: (res) => res?.data,
            transformErrorResponse: (res) => res.status,
            providesTags: ['Category'],
        }),

    })
});


export const { useGetCategoryDataQuery, useGetProductByCategoryQuery } = categoriesApi;