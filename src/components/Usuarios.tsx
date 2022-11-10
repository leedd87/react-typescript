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
			})
			.catch((err) => console.log(err))
	}, [])

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
				<tbody></tbody>
			</table>
		</>
	)
}
