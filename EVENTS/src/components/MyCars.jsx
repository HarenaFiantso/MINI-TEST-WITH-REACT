import React, { Component } from "react";
import Cars from "./Cars";

class MyCars extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<Cars color="Rouge">Toyota</Cars>
				<Cars>Aston Martin</Cars>
				<Cars color="Noire"></Cars>
			</div>
		);
	}
}

export default MyCars;