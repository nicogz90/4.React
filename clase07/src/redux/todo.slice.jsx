import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { items: [] },
  reducers: {
    addTodo(state, action) {
      const lastItem = state.items[state.items.length - 1];
      state.items.push({
        id: lastItem ? lastItem.id + 1 : 1,
        text: action.payload,
        completed: false,
      });
    },
    checkTodo(state, action) {},
    setTodos(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addTodo, checkTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
