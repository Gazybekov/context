import { Button } from "@mui/material";
import React, { useContext } from "react";
import { productContext } from "../context/ProductContext";

const TodoItem = ({ todoTitle, id }) => {
  const { deleteTodo } = useContext(productContext);
  return (
    <div>
      <li className="todo">
        <label>
          <input type="checkbox" />
          <span>{todoTitle}</span>
          <div>
            <Button onClick={() => deleteTodo(id)} variant="outlined">
              Delete
            </Button>
            <Button variant="contained">Edit</Button>
          </div>
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
