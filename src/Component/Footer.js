import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "./redux/filters/actionTodoFilters";

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "no task";

    case 1:
      return "1 task remaining";

    default:
      return `${no_of_todos} tasks remaining`;
  }
};
export const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const todosRemaining = todos.filter ((todo)=> !todo.completed).length;

  const filters = useSelector((state) => state.filters);
  const {status, colors} = filters;

  const dispatch = useDispatch();
  const handleStatusChange = (statues) => {
    console.log("handler ", statues);
    dispatch(statusChange(statues));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChange(color, "removed"));
    } else {
      dispatch(colorChange(color, "added"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer  ${status === "ALL" && "font-bold"}`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer  ${
            status === "Incomplete" && "font-bold"
          }`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer  ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChange("yellow")}
        ></li>
      </ul>
    </div>
  );
};
