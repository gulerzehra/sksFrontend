import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  selectedPost: null,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts: (state, action) => {
      state.posts = action.payload;
    },
    selectPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { fetchPosts, selectPost } = postSlice.actions;

export default postSlice.reducer;
