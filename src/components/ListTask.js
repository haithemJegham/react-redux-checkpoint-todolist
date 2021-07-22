import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const ListTask = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const setList = () => {
    switch (filter) {
      case "all":
        return todos;
      case "Done":
        return todos.filter((todo) => todo.isDone === true);
      case "NotDone":
        return todos.filter((todo) => todo.isDone === false);
      default:
        return todos;
    }
  };

  /* 	const todos = [
		{ id: 1, title: 'todo1', completed: false },
		{ id: 2, title: 'todo2', completed: false },
		{ id: 3, title: 'todo3', completed: true },
		{ id: 4, title: 'todo4', completed: false },
		{ id: 5, title: 'todo5', completed: false },
	]; 
 */
  return (
    <ul className="list-group">
      {setList().map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          description={todo.description}
          isDone={todo.isDone}
        />
      ))}
    </ul>
  );
};

export default ListTask;
