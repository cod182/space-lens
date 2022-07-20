import { createSlice } from '@reduxjs/toolkit';

export const availableCameras = createSlice({
  name: 'availableCameras',
  initialState: {
    cameras: [],
  },
  reducers: {
    selectCameras: (state, action) => {
      state.cameras = action.payload;
    },
  },
});

export const { selectCameras } = availableCameras.actions;

export default availableCameras.reducer;
