import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import { serializePerson } from "./example/example";
import MyButton from "./components/Button";

function App() {
	const person: IPerson = { name: "sara", age: 10, gender: "female" };

	const result = serializePerson(person);

	return (
		<div className="App">
			<HomePage name={"sara"} />
			<MyButton>Click</MyButton>
		</div>
	);
}

export default App;
