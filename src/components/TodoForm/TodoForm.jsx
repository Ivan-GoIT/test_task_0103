import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import TODO_STATUS from 'constants/STATUS';
import { addTodo } from 'redux/todos/todosSlice';

import css from './TodoForm.module.css';

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createNewTodo = () => ({
    id: nanoid(), //I can use Date.now() if the condition on the absence of libraries in the project is critical
    title,
    description,
    status: TODO_STATUS.pending,
  });

  const handleOnSubmitForm = evt => {
    evt.preventDefault();

    if (title.trim() === '' && description === '') {
      return;
    }

    const newTodo = createNewTodo();
    dispatch(addTodo(newTodo));
    setTitle('');
    setDescription('');
  };

  const handleOnChangeInput = evt => {
    evt.preventDefault();
    const name = evt.target.name;
    const value = evt.target.value;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;

      default:
        return;
    }
  };

  return (
    <form onSubmit={handleOnSubmitForm} className={css.todo_form}>
      <label className={css.todo_form__label}>
        Title:
        <input
          name="title"
          type="text"
          value={title}
          placeholder={'Enter title'}
          required
          onChange={handleOnChangeInput}
        />
      </label>
      <label className={css.todo_form__label}>
        Description:
        <input
          name="description"
          type="text"
          value={description}
          placeholder={'Enter description'}
          required
          onChange={handleOnChangeInput}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};
