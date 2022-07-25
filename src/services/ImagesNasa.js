import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const imagesNasaApi = createApi({
  reducerPath: 'imagesNasaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://images-api.nasa.gov/' }),
  endpoints: (builder) => ({

    //* Get Astronomy Photo Of the Day
    getImages: builder.query({
      query: (query) => { return `search?q=${query}` },
    }),
  }),
});

export const {
  useGetImagesQuery
} = imagesNasaApi;
