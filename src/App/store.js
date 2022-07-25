import { configureStore } from '@reduxjs/toolkit';
import availableCamerasReducer from '../features/roverSelection';


import { nasaApi } from '../services/NASA';
import { imagesNasaApi } from '../services/ImagesNasa';

export default configureStore({
  reducer: {
    [nasaApi.reducerPath]: nasaApi.reducer,
    currentAvailableCameras: availableCamerasReducer,
    [imagesNasaApi.reducerPath]: imagesNasaApi.reducer,

  },
});
