import React, {useState} from "react";

const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title) return;

        const newTask = {
            id: Date.now(),
            title,
            description,
            completed: false,
            timestamp: new Date().toISOString()
        };

        addTask(newTask);
        setTitle("");
        setDescription("");
    };

    return (
    <form onSubmit={handleSubmit} className="task-form">
        <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
    </form>
    );
};

export default TaskForm;