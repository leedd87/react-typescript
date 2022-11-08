import React, { useReducer } from "react";

const initalState = {
	validando: true,
	token: null,
};

export const Login = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			<h1>Login</h1>
			<div className="alert alert-info">Validando...</div>

			<div className="alert alert-danger">No autenticado...</div>

			<div className="alert alert-success">Autenticado...</div>

			<button className="btn btn-primary">Login</button>

			<button className="btn btn-danger">Log out</button>
		</>
	);
};
