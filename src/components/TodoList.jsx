import React, { useContext } from "react";
import { productContext } from "../context/ProductContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(productContext);
  return (
    <div>
      <ul>
        {todos.map((elem) => (
          <TodoItem {...elem} key={elem.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
