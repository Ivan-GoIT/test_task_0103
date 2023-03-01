import css from './TodoList.module.css';

const { TodoItem } = require('components/TodoItem/TodoItem');
const { useSelector } = require('react-redux');
const { selectTodos } = require('redux/todos/todosSelectors');

export const TodoList = () => {
  const todos = useSelector(selectTodos);


  return (
    <>
      <div className={css.table_header}>
        <p className={css.column}>id</p>
        <p className={css.column}>title</p>
        <p className={css.column}>description</p>
        <p className={css.column}>status</p>
      </div>
      <ul className={css.list_reset}>
        {todos.map(({ id, title, description, status }, index) => (
          <li key={id} >
            <TodoItem {...{ id, title, description, status, index }} />
          </li>
        ))}
      </ul>
    </>
  );
};
