import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/taskSlice";
import { FaRegSave } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

// Task component to display an individual task

const Task = ({ task, onDelete, onToggle }) => {
  // State to handle edit mode
  const [isEditing, setIsEditing] = useState(false);

  // State to handle the new text for the task
  const [newText, setNewText] = useState(task.text);

  // Create a dispatch function
  const dispatch = useDispatch();

  // Function to handle editing the task
  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, text: newText }));
    }
    setIsEditing(!isEditing);
  };
  return (
    <>
      <li>
        <div className="left">
          <input type="checkbox" checked={task.completed} onChange={onToggle} />

          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              style={{ outline: "none", border: "none" }}
            />
          ) : (
            // Display the task text with a line-through if completed
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          )}
        </div>
        <div className="right">
          <button className="edit-btn" onClick={handleEdit}>
            {isEditing ? <FaRegSave size={15} /> : <LuFileEdit size={15} />}
          </button>
          <button className="delete-btn" onClick={onDelete}>
            <MdDelete size={15} />
          </button>
        </div>
      </li>
    </>
  );
};

export default Task;
