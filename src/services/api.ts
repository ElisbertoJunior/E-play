import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getGamesAction: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getGamesSports: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getGamesSimulation: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getGamesFight: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getGamesRPG: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetGamesActionQuery,
  useGetGamesSportsQuery,
  useGetGamesSimulationQuery,
  useGetGamesFightQuery,
  useGetGamesRPGQuery,
  useGetGameQuery
} = api

export default api