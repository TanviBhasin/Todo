import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/taskSlice";
import Task from "./Task";

// TaskList component to display a list of tasks

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); //useSelector to get the tasks state from the Redux store
  const dispatch = useDispatch(); //useDispatch to create a dispatch function
  return (
    //map over the tasks array and return a Task component for each task

    <>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => dispatch(deleteTask(task.id))}
            onToggle={() => dispatch(toggleTask(task.id))}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
