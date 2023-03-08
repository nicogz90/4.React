import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isAuthenticated: !!localStorage.getItem("token"),
  },
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setIsAuthenticated } = userSlice.actions;

export default userSlice.reducer;
