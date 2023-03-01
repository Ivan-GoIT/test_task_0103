import TODO_STATUS from 'constants/STATUS';

import { useDispatch } from 'react-redux';
import { toggleTodoStatus, deleteTodo } from 'redux/todos/todosSlice';

import css from './TodoItem.module.css';
import todoListcss from '../TodoList/TodoList.module.css';
import { useState } from 'react';
import { TodoModal } from 'components/Modal/Modal';

export const TodoItem = ({ id, title, description, status, index }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = evt => {
    if (evt.target.tagName !== 'INPUT') {
      setShowModal(!showModal);
    }
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggleStatus = evt => {
    evt.preventDefault();
    dispatch(toggleTodoStatus(id));
  };

  const doShortView = str => {
    if (str.length > 15) {
      str = str.slice(0, 12) + '...';
    }
    return str;
  };

  return (
    <>
      <div className={css.todo_box} onClick={toggleShowModal}>
        <p className={todoListcss.column}>{`${index + 1}.`}</p>
        <p className={todoListcss.column}>{doShortView(title)}</p>
        <p className={todoListcss.column}>{doShortView(description)}</p>
        <label className={todoListcss.column}>
          <input
            type="checkbox"
            checked={status === TODO_STATUS.completed}
            onChange={handleToggleStatus}
          />
        </label>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {showModal && (
        <TodoModal
          {...{ title, description, status, index, onClose: toggleShowModal }}
        />
      )}
    </>
  );
};
