import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    addNewTweet(state, action) {
      state.tweets.push({ text: action.payload }); // this can be done thanks to IMMER (tiny package that allow us to write inmutable actualizations using mutative code)
    },
  },
});

export const { addNewTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
