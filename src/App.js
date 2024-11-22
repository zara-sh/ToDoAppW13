import './App.css';
import { useState, useEffect } from 'react';

import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';

/**
 * Using App like main index
 * place holders while we add the componetents
 */
function App() {
  const [tasks, setTasks] = useState([]);

  /**
   * Save tasks to localStorage whenever they change
   * only printing whole task list while testing
   */
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

  /**
   * Removing Task for button somewhere down the DOM
   * Going to see if I can just get the task and delete it off the array?
   * Currently deleting task based on name
   *   this means the delete function will delete the first task that matches the name
   *   should be replaced by UID later
   */
  const removeTask = (taskToRemove) => {
    if (typeof taskToRemove === "string") {
      // for name, this is temp to test function
      const tIndex = tasks.findIndex((elem) => elem.name === taskToRemove);
      let newTasks = tasks;
      newTasks.splice(tIndex, 1);
      setTasks([...newTasks]);
    }
  };

  return (
    <>
      <header>
        <h1>Temp Heading</h1>
      </header>
      <main>
        <CreateTask onAddContact={addTask} />
        <TaskList tasks={tasks} />
      </main>
      <footer>
        <p>Temp Footer with credits and such</p>
      </footer>
    </>
  );
}

export default App;