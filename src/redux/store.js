import { applyMiddleware, createStore } from "redux";
import todoListReducer from "./todoList/index";
import thunk from "redux-thunk";

const store = createStore(todoListReducer, applyMiddleware(thunk));

export default store;
