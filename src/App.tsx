//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { TiposBasicos } from "./typescript/TiposBasicos";
// import Contador from './components/Contador'
// import ContadorConHook from './components/ContadorConHook'
// import { Funciones } from './typescript/Funciones'
// import { Login } from './components/Login'

import { Usuarios } from './components/Usuarios'

const App = () => {
	console.log('Hello Universo')
	console.log('Hola Denis')
	console.log('agregue estilos')

	return (
		<div className="mt-2">
			<h1>Introduccion a Typescript React</h1>
			{/* <TiposBasicos /> */}
			{/* <ObjetosLiterales /> */}
			{/* <Funciones /> */}
			{/* <Contador /> */}
			{/* <ContadorConHook /> */}
			{/* <Login /> */}
			<Usuarios />
		</div>
	)
}

export default App
