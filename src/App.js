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
    console.log(tasks);
  }, [tasks]);

  // Add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  /**
   * Edit Task
   * currently finds task by name
   *   should be replaced by find by UID later
   */
  const editTask = (editedTask) => {
    // should be checking if it's a correct object when we have time later
    if (typeof editedTask === "object") {
      // finding matching object by task name, this should be replaced with UID later
      const tIndex = tasks.findIndex(({name}) => name === editedTask.name);
      // while I'm getting used to findIndex
      console.log("matching index of ", editedTask.name, "=", tIndex);
      const newTasks = tasks;
      newTasks.splice(tIndex, 1, editedTask);
      setTasks([...newTasks]);
    }
  }

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