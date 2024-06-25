import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Initialize the state from localStorage or set it to an empty array if not found
const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

// Create a slice for task management with Redux Toolkit

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //------------------------ Reducer for adding a new task --------------------------//
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
      localStorage.setItem("tasks", JSON.stringify(state));
      toast.success("Task added successfully!");
    },
    //------------------------ Reducer for deleting a task --------------------------//
    deleteTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      toast.error("Task deleted!");
      return newState;
    },
    //------------------------ Reducer for toggling the completion status of a task --------------------------//
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state));
        toast.info(
          `Task marked as ${task.completed ? "completed" : "incomplete"}`
        );
      }
    },
    //------------------------ Reducer for editing the text of a task --------------------------//
    editTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        localStorage.setItem("tasks", JSON.stringify(state));
        toast.success("Task edited successfully!");
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
