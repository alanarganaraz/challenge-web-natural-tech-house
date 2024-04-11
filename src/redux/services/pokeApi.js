import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api",
        prepareHeaders: (headers) => {
            headers.set("api-key", 'nE5X9dKc8JbH3Y2WqRfPzA1t');
            headers.set("Accept", "application/json");
            return headers;
        },

    }),
    endpoints: (data) => ({
        getAllPokemon: data.query({
            query: ({ nameTerm, typeTerm, offset }) => {
                if (nameTerm) {
                    return `/pokemon/name?pokemonName=${nameTerm}`
                }
                if (typeTerm) {
                    return `/pokemon/type?pokemonType=${typeTerm}`
                }
                if (offset) {
                    return `/pokemon/all?offset=${offset}`
                }
                return "/pokemon/all"
            }
        }),
    })
})

export const { useGetAllPokemonQuery } = pokemonApi