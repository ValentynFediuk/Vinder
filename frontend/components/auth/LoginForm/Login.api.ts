import { createApi } from '@reduxjs/toolkit/query/react';
import { vinderBaseQuery } from '../../../utils/api.utilit';
import {
    ILogin,
    ILoginResponse,
} from './Login.model';
export const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: vinderBaseQuery(),
    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponse, ILogin>({
            query: (post) => ({
                url: `/auth/login`,
                method: `Post`,
                body: post,
            }),
        }),
    }),
});
export const { useLoginMutation } = loginApi;