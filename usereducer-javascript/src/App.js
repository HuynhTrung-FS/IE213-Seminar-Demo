import React, { useReducer } from "react";
import "./App.css";

function authReducer(state, action) {
	switch (action.type) {
		case "success":
			return { success: true, user: action.value, error: "" };
		case "failure":
			return { success: false, user: null, error: action.value };
		default:
			throw Error();
	}
}

function App() {
	const initialState = { success: false, user: null, error: "" };

	const [state, dispatch] = useReducer(authReducer, initialState);

	async function submit(data) {
		try {
			const response = await axios.post("/api/login", { data });

			dispatch({
				type: "success",
				value: response.data.user,
			});
		} catch (error) {
			dispatch({
				type: "failure",
				value: error.message,
			});
		}
	}

	return <div>Form Login</div>;
}

export default App;
