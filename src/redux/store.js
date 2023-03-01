import { configureStore } from '@reduxjs/toolkit';
import { todosInitState } from './todos/todosInitState';
import { todosReducer } from './todos/todosSlice';

export const store = configureStore({
  preloadedState: { todos: todosInitState },
  devTools: true,
  reducer: {
    todos: todosReducer,
  },
});
