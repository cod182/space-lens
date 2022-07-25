import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const imagesNasaApi = createApi({
  reducerPath: 'imagesNasaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://images-api.nasa.gov/' }),
  endpoints: (builder) => ({

    //* Get images by search query
    getNasaImages: builder.query({
      query: ({ query, page }) => { return `search?q=${query}&media_type=image&page=${page}` },
    }),
  }),
});

export const {
  useGetNasaImagesQuery
} = imagesNasaApi;
