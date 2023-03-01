const { useSelector } = require('react-redux');
const { selectTodos } = require('redux/todos/todosSelectors');

const TodoList = () => {
  const todos = useSelector(selectTodos);
  return;
};
