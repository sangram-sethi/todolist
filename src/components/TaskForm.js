import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      timestamp: new Date().toISOString(),
    };

    addTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    // <form onSubmit={handleSubmit} className="task-form">
    //     <input
    //         type="text"
    //         placeholder="Task title"
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //         required
    //     />
    //     <textarea
    //         placeholder="Task description"
    //         value={description}
    //         onChange={(e) => setDescription(e.target.value)}
    //     />
    //     <button type="submit">Add Task</button>
    // </form>
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="task-form">
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            className="form-control"
            id="taskTitle"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Task Description
          </label>
          <textarea
            className="form-control"
            id="taskDescription"
            placeholder="Enter task description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
