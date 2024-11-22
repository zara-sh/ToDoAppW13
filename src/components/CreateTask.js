import React, { useState } from "react";

function CreateTask({ onAddContact }) {
  const [taskData, setTaskData] = useState({
    name: "",
    description: "",
    dueDate: "",
    assignedTo: "Family",
    status:"in progress"
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!taskData.name || !taskData.description || !taskData.dueDate ) {
      setError("All fields are required!");
      return;
    }

    setError("");

    // Add a unique ID to the contact
    const newContact = { ...taskData, id: Date.now() };

    // Pass the contact to the parent component
    onAddContact(newContact);

    // Reset form
    setTaskData({
      name: "",
      description: "",
      dueDate: "",
      assignedTo: "Family",
      status:"in progress"
      
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Contact</h3>
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
        <br/>
        <textarea
          type="text"
          name="description"
          value={taskData.description}
          onChange={handleInputChange}
          cols="60"
          rows="5"
        />
      </div>
      <div>
        <label>DueDate:</label>
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
          name="priority"
          value={taskData.status}
          onChange={handleInputChange}
        >
          <option value="progress">progress</option>
          <option value="completed">completed</option>
          <option value="review">review</option>
        </select>
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default CreateTask;