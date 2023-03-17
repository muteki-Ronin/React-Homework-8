// CORE
import { v4 as uuidv4 } from "uuid";
// STYLE
import "./style.css";

export const TodoForm = ({ addTodo }) => {
  const handlerSubmit = (event) => {
    event.preventDefault();
    addTodo({
      id: uuidv4(),
      title: event.target.title.value,
      checked: false,
    });
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="New todo"
        name="title"
      />
      <button className="form__button">Add</button>
    </form>
  );
};
