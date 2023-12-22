import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const API = "http://localhost:8000/todos";
  const INIT_STATE = {
    todos: [],
    todosDetails: {},
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_TODOS":
        return { ...state, todos: action.payload };
      case "GET_DETAILS":
        return { ...state, todosDetails: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! Функция получения данных из db.json
  const getTodos = async () => {
    const { data } = await axios(API);
    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  };
  // ! Функция добавления
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };
  //! Функция удаления
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTodos();
  };
  return (
    <productContext.Provider
      value={{ addTodo, todos: state.todos, getTodos, deleteTodo }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
