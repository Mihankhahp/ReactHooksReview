import React from "react"
import './App.css';
import UseEffectHook from "./Hooks/useEffect";
import UseReducerHook from "./Hooks/useReducer";
import UseStateHook from './Hooks/useState';

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <br />
      <UseReducerHook />
      <br />
      <UseEffectHook />
    </div>
  );
}

export default App;
