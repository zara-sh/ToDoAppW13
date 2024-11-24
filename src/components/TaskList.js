import React, { useState } from "react";

const TaskList = ({ tasks, onEditTask, onRemoveTask }) => {
  const [editingTask, setEditingTask] = useState(null);  // State to track the task being edited
  const [editValues, setEditValues] = useState({
    name: "",
    description: "",
  });

  // Function to start editing a task
  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditValues({
      name: task.name,
      description: task.description,
    });
  };

  // Function to handle input changes in the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to save the edited task
  const handleSave = (task) => {
    const updatedTask = {
      ...task,
      name: editValues.name,
      description: editValues.description,
    };
    onEditTask(updatedTask);  // Call onEditTask to update the task in the list
    setEditingTask(null);      // Close the edit form
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: "20px" }}>
          {editingTask === task.id ? (
            // If the task is being edited, show an input form
            <div>
              <input
                type="text"
                name="name"
                value={editValues.name}
                onChange={handleInputChange}
                placeholder="Task Name"
              />
              <input
                type="text"
                name="description"
                value={editValues.description}
                onChange={handleInputChange}
                placeholder="Task Description"
              />
              <button onClick={() => handleSave(task)}>Save</button>
              <button onClick={() => setEditingTask(null)}>Cancel</button>
            </div>
          ) : (
            // Otherwise, display task details and Edit/Remove buttons
            <div>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <button onClick={() => startEditing(task)}>Edit</button>
              <button onClick={() => onRemoveTask(task)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
