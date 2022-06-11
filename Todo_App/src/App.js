import React from "react";
import "./App.css";

import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <h3>ToDo App</h3>
        <div>
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
