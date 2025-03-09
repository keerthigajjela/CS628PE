import React from "react"; // Importing React to create a functional component

// TodoItem component represents a single task in the ToDo list
// It receives 'task' (the task text) and 'onDelete' (function to remove the task) as props
const TodoItem = ({ task, onDelete }) => {
  return (
    <div className="todo-item">
      {/* Display the task text inside a span */}
      <span>{task}</span>

      {/* Button to remove the task, calls onDelete when clicked */}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

// Exporting the component so it can be used in other parts of the app
export default TodoItem;
