import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

interface IAuth {
    token: string
}

interface IResponse {
    email: string;
    password: string;
}

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:7000'}),
    tagTypes: ['Auth'],
    endpoints: (build) => ({
        loginUser: build.mutation<IAuth, IResponse>({
            query: (post) => ({
                url: '/auth/login',
                method: 'POST',
                body: post,
            }),
            invalidatesTags: ['Auth']
        }),
        signupUser: build.mutation<IAuth, IResponse>({
            query: (post) => ({
                url: '/auth/registration',
                method: 'POST',
                body: post,
            }),
            invalidatesTags: ['Auth']
        })
    })
})
