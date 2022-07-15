import { createSlice } from '@reduxjs/toolkit';

export const roverSelection = createSlice({
  name: 'roverSelection',
  initialState: {
    rover: '',
    page: 1,
    sol: '',
  },
  reducers: {
    selectroverSelection: (state, action) => {
      state.rover = action.payload;
      state.sol = sol;
    },
  },
});

export const { selectroverSelection, searchMovie } = roverSelection.actions;

export default roverSelection.reducer;
