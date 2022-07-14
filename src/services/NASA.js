import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const nasaApiKey = process.env.REACT_APP_NASA_KEY;

export const nasaApi = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nasa.gov/' }),
  endpoints: (builder) => ({
    //* Get Astronomy Photo Of the Day
    getAPOD: builder.query({
      query: () => `planetary/apod?api_key=${nasaApiKey}`,
    }),

    // //* Get Movies by [Type]
    // getMovies: builder.query({
    //   query: ({ genreIdOrCategoryName, page, searchQuery }) => {
    //     //* Get Movies by Search
    //     if (searchQuery) {
    //       return `/search/movie?query=${searchQuery}&page=${page}&api_key=${nasaApiKey}`;
    //     }

    //     //* Get Movies by Category
    //     if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
    //       return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${nasaApiKey}`;
    //     }

    //     //* Get Movies by Genre
    //     if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
    //       return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${nasaApiKey}`;
    //     }

    //     //* Get Popular Movies
    //     return `movie/popular?page=${page}&api_key=${nasaApiKey}`;
    //   },
    // }),

    // //* Get Movie
    // getMovie: builder.query({
    //   query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${nasaApiKey}`,
    // }),

    // //* Get User Specific Lists
    // getList: builder.query({
    //   query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${nasaApiKey}&session_id=${sessionId}&page=${page}`,
    // }),

    // getRecommendations: builder.query({
    //   query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${nasaApiKey}`,
    // }),

    // getActorsDetails: builder.query({
    //   query: (id) => `person/${id}?api_key=${nasaApiKey}`,
    // }),

    // getMoviesByActorId: builder.query({
    //   query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${nasaApiKey}`,
    // }),
  }),
});

export const {
  useGetAPODQuery,
} = nasaApi;
