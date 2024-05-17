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
    addClub: (state, action) => {
      state.clubs.push(action.payload);
    },
  },
});

export const { fetchClubs, selectClub, addClub } = clubsSlice.actions;

export default clubsSlice.reducer;
