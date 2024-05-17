import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
  refreshToken: null,
  user_id: null,
  role: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user_id = action.payload.user_id;
      state.role = action.payload.role;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user_id = null;
      state.role = null;
      state.isLoggedIn = false;
    },
    refreshTokenSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    registerSuccess: (state, action) => {
      state.user_id = action.payload; // Yeni kullanıcı bilgisini ekle
    },
  },
});

export const { loginSuccess, logout, refreshTokenSuccess, registerSuccess } =
  userSlice.actions;

export default userSlice.reducer;
