//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { TiposBasicos } from "./typescript/TiposBasicos";
import Contador from "./components/Contador";
import { Funciones } from "./typescript/Funciones";

const App = () => {
	return (
		<div className="mt-2">
			<h1>Introduccion a Typescript React</h1>
			<hr />
			{/* <TiposBasicos /> */}
			{/* <ObjetosLiterales /> */}
			{/* <Funciones /> */}
			<Contador />
		</div>
	);
};

export default App;
