// COMPONENTS
import { TodoForm } from "../Components/TodoForm/TodoForm";
import { TodoList } from "../Components/TodoList/TodoList";
// STYLE
import "./style.css";

export const App = () => {
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <TodoForm />
      <h2>Todos:</h2>
      <TodoList />
    </div>
  );
};

export default App;
