import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";

// TaskInput component to handle adding a new task
const TaskInput = () => {
  const [text, setText] = useState(""); // State to handle the input text
  const dispatch = useDispatch(); // Create a dispatch function

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input text is not empty or just spaces
    if (text.trim()) {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
