import './App.css';
import { useState, useEffect } from 'react';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import './components/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    // localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log("tasks have changed");
    console.log(tasks);
  }, [tasks]);

  /**
   * Add a new task
   */
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskToRemove) => {
    const tIndex = tasks.findIndex(({ id }) => id === taskToRemove.id);
    const newTasks = [...tasks];
    newTasks.splice(tIndex, 1);
    setTasks(newTasks);
  };

  const removeTask_all = () => {
    // confirm alert
    if (window.confirm("delete all tasks?")) {
      setTasks([]);
    }
  }

  const editTask = (taskToEdit) => {
    const tIndex = tasks.findIndex(({ id }) => id === taskToEdit.id);
    const newTasks = [...tasks];
    newTasks[tIndex] = { ...taskToEdit };
    setTasks(newTasks);
  };

  const sortTasks = (criteria) => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (criteria === "created") {
        return a.id - b.id;
      } else if (criteria === "dueDate") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return 0;
    });
    setTasks(sortedTasks);
  };

  return (
    <>
      <MainHeader />

      {/* temp reset button, move to where it's needed */}
      <button onClick={removeTask_all}>reset</button>

      <div className="sort-controls">
        <label htmlFor="sort">Sort By:</label>
        <select
          id="sort"
          value={sortCriteria}
          onChange={(e) => {
            setSortCriteria(e.target.value);
            sortTasks(e.target.value);
          }}
        >
          <option value="">Select</option>
          <option value="created">Creation Date</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      <FontAwesomeIcon icon="fa-solid fa-face-smile" />// just to check fontawesome is working 

      <main id="main">
        <CreateTask onAddContact={addTask} />
        <TaskList tasks={tasks} onEditTask={editTask} onRemoveTask={removeTask} />
      </main>
      <MainFooter />
      
    </>
  );
}

export default App;