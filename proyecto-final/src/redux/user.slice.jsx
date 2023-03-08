import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isAuthenticated: false,
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
