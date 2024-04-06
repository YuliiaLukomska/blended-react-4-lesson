import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchTodos } from './operations';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [], loading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.todos = payload;
      })
      .addCase(fetchTodos.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addTodo.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.todos.push(payload);
      })
      .addCase(addTodo.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteTodo.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.todos = state.todos.filter(todo => todo.id !== payload);
      })
      .addCase(deleteTodo.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export const todosReducer = todosSlice.reducer;
