import { createApi, fetchBaseQuery } from '@reduxjs/toolkit//query/react'
import { ProductDataType } from '../types/types';
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => {
        return {
            getProducts: builder.query<ProductDataType[], string>({
                query: () => '/products',
            })
        }
    }
});

export const { useGetProductsQuery } = api;