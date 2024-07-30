// src/App.js

import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch tasks from the JSON file
    const fetchTasks = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleSearch = (query) => {
    // Use setSearchQuery to update the state, instead of calling searchQuery as a function
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <SearchBar onSearch={handleSearch} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={filteredTasks} updateTask={updateTask} />
    </div>
  );
};

export default App;