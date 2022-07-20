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

    getRover: builder.query({
      query: ({ rover }) => {
        return `mars-photos/api/v1/rovers/${rover}?api_key=${nasaApiKey}`;

      }
    }),

    // //* Get Photos by [Type]
    getImages: builder.query({
      query: ({ rover, earthDate }) => {
        //* Get images by Rover
        if (rover === 'opportunity' || "curiosity" || "spirit") {
          return `mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&api_key=${nasaApiKey}`;
        }
      },
    }),

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
  useGetAPODQuery, useGetImagesQuery, useGetRoverQuery,
} = nasaApi;
