// COMPONENTS
import { TodoItem } from "../TodoItem/TodoItem";
// STYLE
import "./style.css";

export const TodoList = ({ todoItems, checkedTodo, deleteTodo }) => {
  return (
    <ul>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          title={todoItem.title}
          checked={todoItem.checked}
          checkedTodo={checkedTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
