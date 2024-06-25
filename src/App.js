import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src="../assets/task-img.png" alt="Placeholder" />
      </div>
      <div className="app-container">
        <h1>📝 To-Do List</h1>
        <TaskInput />
        <TaskList />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
