import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../redux/store';
import { ResponseModel } from '../utils/responseModel';

const baseUrl = "http://localhost:7072/api/";

export const commonApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const jwt = localStorage.getItem('jwt');
            const token = (getState() as RootState).auth.token;

            if (token && jwt) {
                headers.set('jwt', `${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
    apiGet: builder.query<ResponseModel, { url: string; id: string }>({
      query: ({ url, id }) => {
        return {
          url: `${url.toLowerCase()}/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response: ResponseModel, meta, arg) => response,
    }),
        apiPost: builder.mutation<ResponseModel, { url: string; body: any }>({
            query: ({ url, body }) => {
                return {
                    url: `${url.toLowerCase()}`,
                    method: 'POST',
                    body
                };
            },
            transformResponse: (response: ResponseModel, meta, arg) => response
        })
    })
});

export const { useApiGetQuery, useApiPostMutation } = commonApi;
