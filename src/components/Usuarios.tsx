import React, { useEffect, useState } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResListado, Usuario } from '../interfaces/reqRes'

export const Usuarios = () => {
	const [usuarios, setUsuarios] = useState<Usuario[]>([])

	useEffect(() => {
		//llamada al api
		reqResApi
			.get<ReqResListado>('/users')
			.then((res) => {
				console.log(res.data.data)
				setUsuarios(res.data.data)
			})
			.catch((err) => console.log(err))
	}, [])

	const renderItem = (usuario: Usuario) => {
		return (
			<tr key={usuario.id.toString()}>
				<th>
					<img
						src={usuario.avatar}
						alt={usuario.first_name}
						style={{ width: 35, borderRadius: 100 }}
					/>
					Avatar
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
			<table>
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
			<button className="btn btn-primary">Siguientes</button>
		</>
	)
}
