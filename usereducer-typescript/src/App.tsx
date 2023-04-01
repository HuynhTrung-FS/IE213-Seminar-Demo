import React, { useReducer } from "react";
import "./App.css";
interface AppState {
  count: number;
}

interface AppAction {
  type: string;
}

const initialState: AppState = { count: 0 };

function reducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo useReducer</h1>
        <p>Count: {state.count}</p>
        <div>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            style={{ margin: 20 }}
          >
            Decrease
          </button>
          <button
            onClick={() => dispatch({ type: "increment" })}
            style={{ margin: 20 }}
          >
            Increase
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
