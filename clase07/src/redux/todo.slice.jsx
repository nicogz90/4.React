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
      // .filter doesn't work:
      // the issue is in the way how filter method works, it returns a new array, and initial array is not mutated
      // state.items.filter((todo) => todo.id !== action.payload);

      // to mutate existing array >>
      state.items.splice(
        state.items.findIndex((todo) => todo.id === action.payload),
        1
      );
    },
    checkTodo(state, action) {
      const id = action.payload;
      const completed = state.items[id].completed;
      state.items[id].completed = !completed;
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
