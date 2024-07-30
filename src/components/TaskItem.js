import React, { useState } from "react";

const TaskItem = ({ task, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [expanded, setExpanded] = useState(false);

  const handleUpdate = () => {
    const updatedTask = {
      ...task,
      title: editTitle,
      description: editDescription,
      timestamp: new Date().toISOString(),
    };
    updateTask(updatedTask);
    setIsEditing(false);
  };

  const toggleComplete = () => {
    const updatedTask = {
      ...task,
      completed: !task.completed,
    };
    updateTask(updatedTask);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-header">
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        ) : (
          <h3>{task.title}</h3>
        )}
        <button onClick={toggleComplete}>
          {task.completed ? "Undo" : "Done"}
        </button>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      {expanded && (
        <div className="task-details">
          {isEditing ? (
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          ) : (
            <p>{task.description}</p>
          )}
          <p className="timestamp">
            Last updated: {new Date(task.timestamp).toLocaleString()}
          </p>
        </div>
      )}
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
};

export default TaskItem;