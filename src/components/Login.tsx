import React, { useReducer } from 'react'

interface AuthState {
	validando: boolean
	token: null | null
	username: string
	nombre: string
}

const initialState: AuthState = {
	validando: true,
	token: null,
	username: '',
	nombre: '',
}

const authReducer = (): AuthState => {}

export const Login = () => {
	const [state, dispatch] = useReducer(first, initialState)

	return (
		<>
			<h1>Login</h1>
			<div className="alert alert-info">Validando...</div>

			<div className="alert alert-danger">No autenticado...</div>

			<div className="alert alert-success">Autenticado...</div>

			<button className="btn btn-primary">Login</button>

			<button className="btn btn-danger">Log out</button>
		</>
	)
}
