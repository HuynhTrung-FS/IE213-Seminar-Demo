import React, { useState, useRef } from "react";

import "./App.css";

function App() {
  const storageJobs = JSON.parse(localStorage.getItem("jobs") as string) ?? [];
  const inputRef = useRef<HTMLInputElement>(null);

  const [toDo, setToDo] = useState<string>("");
  const [jobs, setJobs] = useState<string[]>(storageJobs);

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
            ref={inputRef as React.MutableRefObject<HTMLInputElement>}
          ></input>
          <button onClick={handleAdd}>Add</button>
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
