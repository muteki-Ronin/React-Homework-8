// CORE
import { combineReducers } from "redux";
// REDUCERS
import { todos } from "./todos/todos-reducer";

export const rootReducer = combineReducers({
  todos,
});
