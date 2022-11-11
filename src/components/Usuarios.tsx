import React, { useEffect, useState, useRef } from 'react'
import { reqResApi } from '../api/reqRes'
import { useUsuarios } from '../hooks/useUsuarios'
import { ReqResListado, Usuario } from '../interfaces/reqRes'

export const Usuarios = () => {
	const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios()
	// const [usuarios, setUsuarios] = useState<Usuario[]>([])

	// const paginaRef = useRef(1)

	// useEffect(() => {
	// 	//llamada al api
	// 	cargarUsuarios()
	// }, [])

	// const cargarUsuarios = async () => {
	// 	const resp = await reqResApi.get<ReqResListado>('/users', {
	// 		params: { page: paginaRef.current },
	// 	})

	// 	if (resp.data.data.length > 0) {
	// 		setUsuarios(resp.data.data)
	// 		paginaRef.current++
	// 	} else {
	// 		alert('No hay mas registros')
	// 	}
	// 	// .then((res) => {
	// 	// 	setUsuarios(res.data.data)
	// 	// })
	// 	// .catch((err) => console.log(err))

	// 	setUsuarios(resp.data.data)
	// }

	const renderItem = (usuario: Usuario) => {
		return (
			<tr key={usuario.id.toString()}>
				<th>
					<img
						src={usuario.avatar}
						alt={usuario.first_name}
						style={{ width: 35, borderRadius: 100 }}
					/>
				</th>
				<th>
					{usuario.first_name}
					{usuario.last_name}
				</th>
				<th>{usuario.email}</th>
			</tr>
		)
	}

	return (
		<>
			<h3>Usuario</h3>
			<table className="table">
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Nombre</th>
						<th>email</th>
					</tr>
				</thead>
				{/* <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody> */}
				<tbody>{usuarios.map(renderItem)}</tbody>
			</table>
			<button
				className="btn btn-primary"
				onClick={paginaAnterior}>
				Anteriores
			</button>
			&nbsp;
			<button
				className="btn btn-primary"
				onClick={paginaSiguiente}>
				Siguientes
			</button>
		</>
	)
}
