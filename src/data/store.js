import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import notificationReducer from './notificationSlice';
import clubsReducer from './clubSlice';
import eventsReducer from './eventSlice';
import postReducer from './postSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    club: clubsReducer,
    event: eventsReducer,
    post: postReducer,
  },
});
