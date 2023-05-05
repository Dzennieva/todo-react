import { useState, useEffect, useRef } from "react";

function TodoForm({addTodo, edit}) {
  const [input, setInput] = useState(edit ? edit.value : "");

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: new Date().getTime().toString(),
      text: input,
      isComplete: false
    })
    
    setInput("");
  };
// create new object
// spread the prev array
// add the new object to the array
  return (
    <form className="todo--form" onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            type="text"
            placeholder="Update todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
            className="todo--input edit"
          />
          <button className="todo--btn edit">update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
            className="todo--input edit"
          />
          <button className="todo--btn">Add Todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
