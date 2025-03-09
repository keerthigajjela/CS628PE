import TodoList from "./TodoList"; 

import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  // State to store the todos
  const [todos, setTodos] = useState([]); 
  // State for input field
  const [input, setInput] = useState(""); 

  const addTodo = () => {
    // Prevent empty todos
    if (input.trim() === "") return; 
    // Add new todo
    setTodos([...todos, input]); 
    //Clear input field
    setInput(""); 
  };

  const deleteTodo = (index) => {
    // Remove todo by index
    setTodos(todos.filter((_, i) => i !== index)); 
  };

  return (
    <div className="app">
      <h1>ToDo List App</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task description"
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
