import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import { serializePerson } from "./examples/examples";
import Button from "./components/Button";

function App() {
	const person = { name: "sara", age: 10, gender: "female" };
	const result = serializePerson(person);

	return (
		<div className="App">
			<HomePage />
			<Button>click</Button>
		</div>
	);
}

export default App;
