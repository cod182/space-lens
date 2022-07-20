import { configureStore } from '@reduxjs/toolkit';
import availableCamerasReducer from '../features/roverSelection';


import { nasaApi } from '../services/NASA';

export default configureStore({
  reducer: {
    [nasaApi.reducerPath]: nasaApi.reducer,
    currentAvailableCameras: availableCamerasReducer,
  },
});
