import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clubs: [],
  selectedClub: null,
};

export const clubsSlice = createSlice({
  name: 'clubs',
  initialState,
  reducers: {
    fetchClubs: (state, action) => {
      state.clubs = action.payload;
    },
    selectClub: (state, action) => {
      state.selectedClub = action.payload;
    },
  },
});

export const { fetchClubs, selectClub } = clubsSlice.actions;

export default clubsSlice.reducer;
