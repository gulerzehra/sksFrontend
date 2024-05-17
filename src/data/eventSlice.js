import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  selectedEvent: null,
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    fetchEvents: (state, action) => {
      state.events = action.payload;
    },
    selectEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
  },
});

export const { fetchEvents, selectEvent } = eventSlice.actions;

export default eventSlice.reducer;
