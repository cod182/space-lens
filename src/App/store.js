import { configureStore } from '@reduxjs/toolkit';

import { nasaApi } from '../services/NASA';
// import genreOrCategoryReducer from '../features/currentGenreOrCategory';


export default configureStore({
  reducer: {
    [nasaApi.reducerPath]: nasaApi.reducer,
    // currentGenreOrCategory: genreOrCategoryReducer,

  },
});
