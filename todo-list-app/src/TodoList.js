// Importing React library
// Importing the TodoItem component
import React from "react";
import TodoItem from "./TodoItem";

// TodoList component receives 'todos' array and 'onDelete'
const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? <p>No tasks added.</p> : null}
      {todos.map((todo, index) => (
        <TodoItem key={index}// Assigning a unique key
         task={todo} // Passing the task text as a prop
         onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default TodoList;
