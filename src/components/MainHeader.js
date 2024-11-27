import "./MainHeader.css";
import logo from "./logo.png";

export default function MainHeader({ dis }) {
  return (
    <header id="header">
      <div id="header-display">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>
          <span id="App-name">ClearIt </span>
          <span id="header-text">clear your mind, clear your tasks</span>
        </h1>
      </div>
      <nav id="header-nav">
        <div>
          <button
            onClick={() => {
              dis("createTask");
            }}
          >
            Create New Task
          </button>
          <button
            onClick={() => {
              dis("taskList");
            }}
          >
            Task List
          </button>
        </div>
        <ul>
          <li>
            <a href="#main">Top</a>
          </li>
          <li>
            <a href="#footer">Credit</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
