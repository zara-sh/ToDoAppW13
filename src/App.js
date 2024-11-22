import './App.css';
import CreateTask from './components/CreateTask';
import { useState, useEffect } from 'react';

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
      <header>
        <h1>Temp Heading</h1>
      </header>
      <main>
        <CreateTask onAddContact={addTask} />
      </main>
      <footer>
        <p>Temp Footer with credits and such</p>
      </footer>
    </>
  );
}

export default App;