
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
    endpoints: (builder) => ({

        fetchCharacters: builder.query({
            query: (page = 1) => `character?page=${page}&limit=8`, 
           
        }),
        fetchCharacterById: builder.query({
            query: (id) => `character/${id}`,
        }),
    }),
});



export const { useFetchCharactersQuery, useFetchCharacterByIdQuery } = usersApi;
