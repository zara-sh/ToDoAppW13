import './App.css';
import { useState, useEffect } from 'react';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import MainHeader from './components/MainHeader';

function App() {
  const [tasks, setTasks] = useState([]);

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

  const editTask = (taskToEdit) => {
    const tIndex = tasks.findIndex(({ id }) => id === taskToEdit.id);
    const newTasks = [...tasks];
    newTasks[tIndex] = { ...taskToEdit };
    setTasks(newTasks);
  };

  return (
    <>
    
      <main id="main">
        <CreateTask onAddContact={addTask} />
        <TaskList tasks={tasks} onEditTask={editTask} onRemoveTask={removeTask} />
      </main>
      <footer>
        <p>Temp Footer with credits and such</p>
      </footer>
    </>
  );
}

export default App;
