// createSlice is a FUNCTION that returns an object with
// prop "reducer" (with reducers) and "actions" (with actions)

import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { items: [], loading: true },
  reducers: {
    addTodo(state, action) {
      const lastItem = state.items[state.items.length - 1];
      state.items.push({
        id: lastItem ? lastItem.id + 1 : 1,
        text: action.payload,
        completed: false,
      });
    },
    deleteTodo(state, action) {
      // .filter returns a new array
      state.items = state.items.filter((todo) => todo.id !== action.payload);

      // other way: .splice (mutates array):
      // state.items.splice(state.items.findIndex((todo) => todo.id === action.payload),1);
    },
    checkTodo(state, action) {
      const id = action.payload.id;
      const completed = state.items[id].completed;
      state.items[id].completed = !completed;

      // other way:
      /* state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: action.payload.completed }
          : item
      ); */
    },
    setTodos(state, action) {
      state.items = action.payload;
    },
    todoLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, checkTodo, setTodos, todoLoading } =
  todoSlice.actions;
export default todoSlice.reducer;
