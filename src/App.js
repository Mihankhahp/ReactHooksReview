import React from "react"
import './App.css';
import UseReducerHook from "./Hooks/useReducer";
import UseStateHook from './Hooks/useState';

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <br />
      <UseReducerHook />
    </div>
  );
}

export default App;
