
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
    endpoints: (builder) => ({
        fetchCharacters: builder.query({
            query: (page = 1) => `character?page=${page}`, 
        }),
    }),
});



export const { useFetchCharactersQuery } = usersApi;
