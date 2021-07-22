import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleIsDone, deleteTask, editTask } from "../redux/todoSlice";
import { useRef } from "react";
const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(true);
  const [editing, setEditing] = useState(false);
  const handleCompleteClick = () => {
    dispatch(toggleIsDone({ id: id, isDone: !isDone }));
  };

  const handleEditClick = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
    setEditing(true);
  };

  const handleDleteClick = () => {
    dispatch(deleteTask({ id }));
  };
  const handleSave = () => {
    setEditing(false);
    dispatch(editTask({ description: inputRef.current.value }));
  };

  return (
    <li className={`list-group-item ${isDone && "list-group-item-success"}`}>
      <div>
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={isDone}
            onClick={handleCompleteClick}
          ></input>

          <textarea
            className="form-inline mt-3 mb-3"
            rows="2"
            ref={inputRef}
            disabled={!editing}
            defaultValue={description}
          />

          {!editing && (
            <button onClick={handleEditClick} className="btn btn-primary mb-0">
              Edit
            </button>
          )}
          {!editing && (
            <button onClick={handleDleteClick} className="btn btn-danger">
              Delete
            </button>
          )}

          {editing && (
            <button onClick={handleSave} className="btn btn-primary mb-0">
              save
            </button>
          )}
        </span>
      </div>
    </li>
  );
};

export default Task;
