import React, { useState } from 'react';
import './MainHeader.css';
import logo from './logo.png';
import CreateTask from './CreateTask'; // Import CreateTask component
import TaskList from './TaskList';     // Import TaskList component

export default function MainHeader() {
    // State variables
    const [tasks, setTasks] = useState([]); // Stores the list of tasks
    const [showCreateTask, setShowCreateTask] = useState(false); // Toggle CreateTask view
    const [showTaskList, setShowTaskList] = useState(false);     // Toggle TaskList view

    // Function to add a new task
    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setShowCreateTask(false); // Hide CreateTask view after adding
    };

    // Function to edit an existing task
    const handleEditTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
    };

    // Function to remove a task
    const handleRemoveTask = (taskToRemove) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== taskToRemove.id)
        );
    };

    return (
        <div>
            <header id="header">
                <div id="header-display">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <h1>
                        <span id='App-name'>CleareIt, </span>
                        <span id='header-text'>clear your mind, clear your tasks</span>
                    </h1>
                </div>
                <nav id="header-nav">
                    <div>
                        <button onClick={() => setShowCreateTask(true)}>Create New Task</button>
                        <button onClick={() => setShowTaskList(true)}>Task List</button>
                    </div>
                    <ul>
                        <li><a href="#main">Top</a></li>
                        <li><a href="#footer">Credit</a></li>
                    </ul>
                </nav>
            </header>

            {/* Display CreateTask Component */}
            {showCreateTask && (
                <div>
                    <button onClick={() => setShowCreateTask(false)}>Close Create Task</button>
                    <CreateTask onAddContact={handleAddTask} />
                </div>
            )}

            {/* Display TaskList Component */}
            {showTaskList && (
                <div>
                    <button onClick={() => setShowTaskList(false)}>Close Task List</button>
                    <TaskList
                        tasks={tasks}
                        onEditTask={handleEditTask}
                        onRemoveTask={handleRemoveTask}
                    />
                </div>
            )}
        </div>
    );
}
