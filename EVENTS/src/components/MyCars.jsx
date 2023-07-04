import React, { Component } from "react";
import Cars from "./Cars";

class MyCars extends Component {
	noCopy = () => {
		alert("Ehhh Maty aaaa!")
	}
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p onCopy={this.noCopy}>Tsy azo ipipizana eto</p>
				<Cars color="Rouge">Toyota</Cars>
				<Cars>Aston Martin</Cars>
				<Cars color="Noire"></Cars>
			</div>
		);
	}
}

export default MyCars;