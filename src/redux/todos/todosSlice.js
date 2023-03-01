import { createSlice } from '@reduxjs/toolkit';
import TODO_STATUS from 'constants/STATUS';
import { todosInitState } from './todosInitState';

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = state.todos.push(payload);
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },

    toggleTodoStatus: (state, { payload }) => {
      const todo = state.todos.find(todo => todo.id === payload);
      if (todo) {
        const { pending, completed } = TODO_STATUS;
        todo.status = todo.status === pending ? completed : pending;
      }
    },
  },
});

export const { addTodo,deleteTodo,toggleTodoStatus}=todosSlice.actions

export const todoReduser=todosSlice.reducer
