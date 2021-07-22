import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFilter} from "../redux/filterSlice"

const FilterTask = ({ filter }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(toggleFilter(e.target.value));
    /* alert(e.target.value) */
  };

  return (
    <span className="d-flex align-items-center" style={{ gap: "10px" }}>
      <span>
        {" "}
        <input
          type="radio"
          className="mr-3"
          name="radio"
          value="all"
          id="all"
          onClick={handleClick}
        ></input>
        <label htmlFor="all">All Tasks</label>
      </span>
      <span>
        <input
          type="radio"
          className="mr-3"
          name="radio"
          value="Done"
          id="Done"
          onClick={handleClick}
        ></input>
        <label htmlFor="Done">Done</label>
      </span>
      <span>
        <input
          type="radio"
          className="mr-3"
          name="radio"
          value="NotDone"
          id="NotDone"
          onClick={handleClick}
        ></input>
        <label htmlFor="NotDone">NotDone</label>
      </span>
    </span>
  );
};

export default FilterTask;
