import { Button } from "@mui/material";
import React from "react";

const TodoItem = ({ title }) => {
  return (
    <div>
      <li className="todo">
        <label>
          <input type="checkbox" />
          <span>{title}</span>
          <div>
            <Button variant="outlined">Delete</Button>
            <Button variant="contained">Edit</Button>
          </div>
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
