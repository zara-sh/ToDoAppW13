import React, { useState, useEffect } from "react";

function CreateTask({ onAddContact, taskToEdit, onEditTask }) {
  const [taskData, setTaskData] = useState({
    name: "",
    description: "",
    dueDate: "",
    assignedTo: "Family",
    status: "in progress",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    // If there's a task to edit, pre-fill the form with the task data
    if (taskToEdit) {
      setTaskData({
        name: taskToEdit.name,
        description: taskToEdit.description,
        dueDate: taskToEdit.dueDate,
        assignedTo: taskToEdit.assignedTo,
        status: taskToEdit.status,
      });
    }
  }, [taskToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!taskData.name || !taskData.description || !taskData.dueDate) {
      setError("All fields are required!");
      return;
    }

    setError("");

    // If there's a task to edit, update it. Otherwise, create a new task.
    if (taskToEdit) {
      onEditTask({ ...taskData, id: taskToEdit.id }); // Edit task
    } else {
      const newTask = { ...taskData, id: Date.now() }; // New task
      onAddContact(newTask);
    }

    // Reset form after submission
    setTaskData({
      name: "",
      description: "",
      dueDate: "",
      assignedTo: "Family",
      status: "in progress",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{taskToEdit ? "Edit Task" : "Add Task"}</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={taskData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <br />
        <textarea
          name="description"
          value={taskData.description}
          onChange={handleInputChange}
          cols="60"
          rows="5"
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={taskData.dueDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Assigned To:</label>
        <input
          type="text"
          name="assignedTo"
          value={taskData.assignedTo}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={taskData.status}
          onChange={handleInputChange}
        >
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="review">Review</option>
        </select>
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit">{taskToEdit ? "Save Changes" : "Add Task"}</button>
    </form>
  );
}

export default CreateTask;
