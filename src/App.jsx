import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TodoApp from "./components/TodoApp";

const todos = [
  { id: 1, task: "Syssla 1" },
  { id: 2, task: "Syssla 2" },
  { id: 3, task: "Syssla 3" },
  { id: 4, task: "Syssla 4" },
  { id: 5, task: "Syssla 5" },
];

function App() {
  return (
    <div>
      <TodoApp todos={todos} />
    </div>
  );
}

export default App;
