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
   * Currently deleting task based Date
   * Supports both Date(number) and task(object)
   */
  const removeTask = (taskToRemove) => {
    if (typeof taskToRemove === "object" || typeof taskToRemove === "number") {
    console.log("type of id: ", typeof taskToRemove.id);
      let tIndex = 0;
      // get the index for event to remove, supports number and task object
      if (typeof taskToRemove === "object") {
        console.log("removing task id:", taskToRemove.id);
        tIndex = tasks.findIndex(({id}) => id === taskToRemove.id);
      } else {
        console.log("removing task id:", taskToRemove);
        tIndex = tasks.findIndex(({id}) => id === taskToRemove);
      }
      // for name, this is temp to test function
      let newTasks = tasks;
      newTasks.splice(tIndex, 1);
      setTasks([...newTasks]);
    }
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