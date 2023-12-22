import { Button } from "@mui/material";
import React, { useContext } from "react";
import { productContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

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
            <Link to={`/edit/${id}`}>
              <Button variant="contained">Edit</Button>
            </Link>
            <Link to={`/details/${id}`}>
              <Button variant="outlined">Details</Button>
            </Link>
          </div>
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
