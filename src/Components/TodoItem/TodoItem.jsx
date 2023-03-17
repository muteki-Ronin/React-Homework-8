// STYLE
import "./style.css";

export const TodoItem = ({ id, title, checked, checkedTodo, deleteTodo }) => {
  const handlerChecked = () => {
    checkedTodo(id);
  };
  const handlerDelete = () => {
    deleteTodo(id);
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
