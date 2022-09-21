import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../models/IUser";

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:7000'}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        fetchUser: build.mutation<IUser, IUser> ({
            query: (post) => ({
                url: '/auth/get-user',
                method: 'post',
                body: post,
            }),
            invalidatesTags: ['User']
        })
    })
})
