import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
  unreadCount: 0,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    fetchNotifications: (state, action) => {
      state.notifications = action.payload;
      state.unreadCount = state.notifications.filter(
        (notification) => !notification.read,
      ).length;
    },
    markNotificationAsRead: (state, action) => {
      const notificationId = action.payload;
      const notificationIndex = state.notifications.findIndex(
        (notification) => notification.id === notificationId,
      );
      if (notificationIndex !== -1) {
        state.notifications[notificationIndex].read = true;
        state.unreadCount = state.notifications.filter(
          (notification) => !notification.read,
        ).length;
      }
    },
  },
});

export const { fetchNotifications, markNotificationAsRead } =
  notificationSlice.actions;

export default notificationSlice.reducer;
