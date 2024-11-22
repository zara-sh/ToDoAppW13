import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h3>Tasks List</h3>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h4>{task.name}</h4>
            <p>
              <strong>Description:</strong> {task.description}
            </p>
            <p>
              <strong>Due Date:</strong> {task.dueDate}
            </p>
            <p>
              <strong>Assigned To:</strong> {task.assignedTo}
            </p>
            <p>
              <strong>status:</strong> {task.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;