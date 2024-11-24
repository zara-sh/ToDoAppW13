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