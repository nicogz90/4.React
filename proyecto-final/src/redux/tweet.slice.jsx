import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    addNewTweet(state, action) {
      state.tweets.push({ text: action.payload });
    },
  },
});

export const { addNewTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
