import React, { createContext, useState } from "react";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const [todoTitle, setTodoTitle] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: todoTitle,
      },
    ]);
    setTodoTitle("");
  };
  return (
    <productContext.Provider
      value={{ addTodo, todoTitle, todos, setTodoTitle }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
