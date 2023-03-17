// CONSTS
import {
  ADD_TODO,
  CHECKED_TODO,
  DELETE_TODO,
  DELETE_ALL,
} from "./todos-consts";

const initialState = [];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          title: action.title,
          checked: false,
        },
      ];
    case CHECKED_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case DELETE_ALL:
      return (state = initialState);
    default:
      return state;
  }
};
