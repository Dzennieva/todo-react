import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  const clearTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

   const addTodo = (todo) => {
     if (!todo.text || /^\s*$/.test(todo.text)) {
       return;
     }
     setTodos([...todos, todo]);
     console.log(...todos);
   };

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };


  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div>
      <h4 className="todo--subheading">What's your plan for today?</h4>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        clearTodo={clearTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default Todo;
