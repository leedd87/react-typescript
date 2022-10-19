export const TiposBasicos = () => {
	let nombre: string = 'Fernando'
	const edad: number = 35
	const estaActivo: boolean = true

	//array con strings
	const poderes: string[] = [] //['Velocidad', 'Volar', 'Respirar en el agua']
	return (
		<>
			<h3>Tipos basicos</h3>
			{nombre},{edad}, {estaActivo ? 'activo' : 'no activo'}
		</>
	)
}
