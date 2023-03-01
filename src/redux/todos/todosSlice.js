import { createSlice } from '@reduxjs/toolkit';
import { todosInitState } from './todosInitState';
import TODO_STATUS from 'constants/STATUS';

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitState,
  reducers: {
    addTodo: (state, { payload }) => {
      state = state.push(payload);
    },

    deleteTodo: (state, { payload }) => {
      const todoIndex = state.findIndex(todo => todo.id === payload);
      if (todoIndex !== -1) {
        state.splice(todoIndex, 1);
      }
    },

    toggleTodoStatus: (state, { payload }) => {
      const todo = state.find(todo => todo.id === payload);
      if (todo) {
        const { pending, completed } = TODO_STATUS;
        todo.status = todo.status === pending ? completed : pending;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoStatus } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
