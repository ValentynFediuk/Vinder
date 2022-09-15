import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseUrl = process.env.NEXT_PUBLIC_API;

export function vinderBaseQuery() {
    return fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers: Headers) => {
            headers.set('Accept', `application/json`);
            return headers;
        },
        credentials: 'include',
    });
}