import React, { useContext } from "react";
import { productContext } from "../context/ProductContext";
import TodoList from "./TodoList";

const AddProduct = () => {
  const { addTodo, todoTitle, setTodoTitle } = useContext(productContext);

  return (
    <div>
      <div className="container">
        <h1>Todo App</h1>
        <div className="input-field">
          <form onSubmit={addTodo}>
            <input
              type="text"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
            <label>TodoName</label>
          </form>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default AddProduct;
