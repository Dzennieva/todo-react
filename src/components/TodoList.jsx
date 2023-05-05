import React, { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineEditNote } from "react-icons/md";
import TodoForm from "./TodoForm";

function TodoList({ todos, completeTodo, clearTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} addTodo={submitUpdate} />;
  }

  return todos.map((todo, index) => {
    // const { id, text, isComplete } = todo;
    return (
      <div
        className={todo.isComplete ? "todo--row  container complete" : "todo--row container"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiEyeCloseLine
            className="remove--icon"
            onClick={() => clearTodo(todo.id)}
          />
          <MdOutlineEditNote
            className="edit--icon"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          />
        </div>
      </div>
    );
  });
}

export default TodoList;
