import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

let AddTodo = () => {
  let input;
  let dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <div className="d-flex">
          <input
            className="form-control mr-4"
            ref={(node) => {
              input = node;
            }}
          />
          <button className="btn btn-primary col-auto" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};
// AddTodo = connect()(AddTodo)

export default AddTodo;
