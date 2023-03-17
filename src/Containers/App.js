// CORE
import { useState } from "react";
// COMPONENTS
import { TodoForm } from "../Components/TodoForm/TodoForm";
import { TodoList } from "../Components/TodoList/TodoList";
// STYLE
import "./style.css";

export const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = ({ id, title, checked }) => {
    setTodoItems([...todoItems, { id, title, checked }]);
  };

  const checkedTodo = (id) => {
    setTodoItems(
      todoItems.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, checked: !todoItem.checked }
          : todoItem
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <TodoForm addTodo={addTodo} />
      <h2>Todos:</h2>
      <TodoList
        todoItems={todoItems}
        checkedTodo={checkedTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
