import { createSlice } from '@reduxjs/toolkit';
import { todosInitState } from './todosInitState';
import TODO_STATUS from 'constants/STATUS';

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitState,
  reducers: {
    addTodoAction: (state, { payload }) => {
      state.todos = state.todos.push(payload);
    },

    deleteTodoAction: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },

    toggleTodoStatusAction: (state, { payload }) => {
      const todo = state.todos.find(todo => todo.id === payload);
      if (todo) {
        const { pending, completed } = TODO_STATUS;
        todo.status = todo.status === pending ? completed : pending;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoStatus } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
