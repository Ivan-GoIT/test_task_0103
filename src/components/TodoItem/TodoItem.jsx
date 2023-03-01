
import css from './TodoItem.module.css'

const { useDispatch } = require('react-redux');
const { deleteTodo, toggleTodoStatus } = require('redux/todos/todosSlice');

const TodoItem = ({ id, title, description, status }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

const handleToggleStatus=()=>{
    dispatch(toggleTodoStatus(id))
}

//{status==='completed'}

return(
    <div className={css.todo_box}>
<h2>{title}</h2>
<p>{description}</p>
<button onClick={handleDelete}>Delete</button>
<import type='checkbox'/>
    </div>
)
};
