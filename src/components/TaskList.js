import React, { useEffect, useState } from "react";

const TaskList = ({ tasks, onEditTask, onRemoveTask }) => {
  const [editingTask, setEditingTask] = useState(null); // State to track the task being edited
  const [editValues, setEditValues] = useState({
    name: "",
    description: "",
  });
  const [error, setError] = useState("");

  // reset error message on editor opening & closing
  useEffect(() => {
    setError("");
  }, [editingTask]);

  // Function to start editing a task
  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditValues({
      name: task.name,
      description: task.description,
      dueDate: task.dueDate,
      // minimum date for validation later
      MINDATE: task.dueDate,
      assignedTo: task.assignedTo,
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

  // handle change immediatly
  const handleInputChange_immediate = (dom, task) => {
    const { name, value } = dom.target;
    task = {
      ...task,
      [name]: value,
    };
    // console.log(task);
    onEditTask(task);
  };

  // Function to save the edited task
  const handleSave = (task) => {
    /**
     * put data validation here
     * mostly copied from CreateTask
     * starting to think this should be a separate function
     */
    if (!editValues.name || !editValues.description || !editValues.dueDate) {
      setError("All fields are required!");
      return;
    }

    if (editValues.description.length < 5) {
      setError("description too short");
      return;
    }

    const dDate = new Date(editValues.dueDate);
    const minDate = new Date(editValues.MINDATE);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight to compare only dates

    // failing fast for NaN
    if (isNaN(dDate.getTime())) {
      setError("Due date must be a valid date");
      return;
    }
    // compare with today or last due date
    if (dDate < minDate && dDate < today) {
      setError("Due date must be after today or last due date");
      return;
    }

    const updatedTask = {
      ...task,
      name: editValues.name,
      description: editValues.description,
      dueDate: editValues.dueDate,
      assignedTo: editValues.assignedTo,
    };
    onEditTask(updatedTask); // Call onEditTask to update the task in the list
    setEditingTask(null); // Close the edit form
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: "20px" }}>
          {editingTask === task.id ? (
            // If the task is being edited, show an input form
            <div>
              <span>Task Name: </span>
              <input
                type="text"
                name="name"
                value={editValues.name}
                onChange={handleInputChange}
                placeholder="Task Name"
              />
              <br />
              <span>Description: </span>
              <br />
              <textarea
                type="text"
                name="description"
                value={editValues.description}
                onChange={handleInputChange}
                placeholder="Task Description"
                cols="60"
                rows="5"
              />
              <br />
              <span>Due Date: </span>
              <input
                type="date"
                name="dueDate"
                value={editValues.dueDate}
                onChange={handleInputChange}
              />
              <br />
              <span>Assigned To: </span>
              <input
                type="text"
                name="assignedTo"
                value={editValues.assignedTo}
                onChange={handleInputChange}
              />
              <br />
              {error && <p className="error-message">{error}</p>}
              <button onClick={() => handleSave(task)}>Save</button>
              <button onClick={() => setEditingTask(null)}>Cancel</button>
            </div>
          ) : (
            // Otherwise, display task details and Edit/Remove buttons
            <div className="card">
              <h3>{task.name}</h3>
              <h5>Due by: {task.dueDate}</h5>
              <p>Assigned to: {task.assignedTo}</p>
              <p>
                Status:
                <select
                  name="status"
                  value={task.status}
                  onChange={(dom) => {
                    handleInputChange_immediate(dom, task);
                  }}
                >
                  <option value="in progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="review">Review</option>
                </select>
              </p>
              <p>
                Description:
                <br />
                {task.description}
              </p>
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
