import './App.css';
import { useState, useEffect } from 'react';

import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import MainHeader from './components/MainHeader';

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
   * Currently finds task to edit or replace by Date
   * Only supports task(object) as input
   */
  const editTask = (taskToEdit) => {
    if (typeof taskToEdit === "object" || typeof taskToEdit === "number") {
      // only support task object, since we'd need the information to edit
      console.log("removing task ID:", taskToEdit.id);
      const tIndex = tasks.findIndex(({id}) => id === taskToEdit.id)
      // to update tasks
      const newTasks = tasks;
      newTasks.splice(tIndex, 1, taskToEdit);
      setTasks([...newTasks]);
    }
  }

  return (
    <>
      <MainHeader />
      <main id='main'>
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