// CORE
import { useSelector, useDispatch } from "react-redux";
// COMPONENTS
import { TodoItem } from "../TodoItem/TodoItem";
// SELECTORS
import { todosSelector } from "../../store/todos/todos-selectors";
//ACTIONS
import { deleteAll } from "../../store/todos/todos-actions";
// STYLE
import "./style.css";

export const TodoList = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  return (
    <>
      <ul>
        {todos.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
            checked={todoItem.checked}
            edit={todoItem.edit}
          />
        ))}
      </ul>
      {todos.length > 1 ? (
        <button className="del-all_btn" onClick={handleDeleteAll}>
          DELETE ALL
        </button>
      ) : null}
    </>
  );
};
