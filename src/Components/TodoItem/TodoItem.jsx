// CORE
import { useDispatch } from "react-redux";
// ACTIONS
import { checkedTodo, deleteTodo } from "../../store/todos/todos-actions";
// STYLE
import "./style.css";

export const TodoItem = ({ id, title, checked }) => {
  const dispatch = useDispatch();

  const handlerChecked = () => {
    dispatch(checkedTodo(id));
  };
  const handlerDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className="todo-item">
      <label className="todo-item__label">
        <input
          type="checkbox"
          onChange={handlerChecked}
          defaultChecked={checked}
        />
        <p
          className={
            checked
              ? "todo-item__desc todo-item__desc--checked"
              : "todo-item__desc"
          }
        >
          {title}
        </p>
      </label>
      <button className="del_btn" onClick={handlerDelete}>
        Delete
      </button>
    </li>
  );
};
