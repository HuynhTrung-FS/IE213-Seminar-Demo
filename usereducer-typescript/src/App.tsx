import React, { Reducer, useReducer } from "react";
import "./App.css";
import { AuthState, AuthAction, authReducer, authState } from "./auth_reducer";
import axios from "axios";

function App() {
	const [state, dispatch] = useReducer<Reducer<AuthState, AuthAction>>(authReducer, authState);

	async function submit(data: any) {
		try {
			const response = await axios.post("/api/login", { data });

			dispatch({
				type: "success",
				value: response.data.user,
			});
		} catch (error: any) {
			dispatch({
				type: "failure",
				value: error.message,
			});
		}
	}

	return <div>Login Form</div>;
}

export default App;
