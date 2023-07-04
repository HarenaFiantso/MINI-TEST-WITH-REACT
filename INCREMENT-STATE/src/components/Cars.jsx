import React from "react";
import './Cars.css';

function Cars({ children, color }) {
	const colorInfo = color ? (<p>Couleur : {color}</p>) : (<p>Couleur : Pas de couleur</p>);
	if (children) {
		return (
			<div className="Items">
				<p>Marque : {children} </p>
				{colorInfo}
			</div>
		);
	} else {
		return (
			<div className="Items">
				<p>Pas de data</p>
			</div>
		);
	}
}

export default Cars;