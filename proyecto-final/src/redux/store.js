import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.slice";
import tweetReducer from "./tweet.slice";

export const store = configureStore({
  reducer: { users: userReducer, tweets: tweetReducer },
});
