import React from "react";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const ContadorConHook = () => {
	const { valor, acumular } = useCounter(5);

	return (
		<>
			<h3>
				Contador con Hooks <small>{valor}</small>
			</h3>
			<button className="btn btn-primary" onClick={() => acumular(1)}>
				+1
			</button>
			&nbsp;
			<button className="btn btn-primary" onClick={() => acumular(-1)}>
				-1
			</button>
		</>
	);
};

export default ContadorConHook;
