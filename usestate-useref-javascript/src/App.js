import React, { useState, useRef} from "react";

import "./App.css";

function App() {
  const storageJobs = JSON.parse(localStorage.getItem("jobs")) ?? [];
  const inputRef = useRef(null);

  const [toDo, setToDo] = useState("");
  const [jobs, setJobs] = useState(storageJobs);

  const handleAdd = () => {
    setJobs((prev) => {
      const newJobs = [...prev, toDo];
      //Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setToDo("");
    inputRef.current?.focus();
  };

  const handleClear = () => {
    setJobs((prev) => {
      localStorage.clear();
      return [];
    });
    setToDo("");
    inputRef.current?.focus();
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo useStare + useRef with todo list</h1>
        <section>
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          ref={inputRef}
        ></input>
        <button onClick={handleAdd} style={{margin: 5}}>Add</button>
        <button onClick={handleClear}>Clear</button>
        </section>
        <ul>
          {jobs.map((toDo, index) => (
            <li key={index}>{toDo}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}
export default App;
