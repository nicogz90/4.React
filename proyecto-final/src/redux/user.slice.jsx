import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    // The double bang or exclamation marks (!!) is not a Javascript operator.
    // It’s a double ! logic “not” operator which converts a value to a boolean and then returns the opposite of the resulting boolean value.
    isAuthenticated: !!localStorage.getItem("token"),
    username: "",
  },
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
  },
});

export const { setIsAuthenticated, setUsername } = userSlice.actions;
export default userSlice.reducer;
