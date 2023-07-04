import React, { Component } from "react";
import Cars from "./Cars";
import "./MyCars.css"

class MyCars extends Component {
	noCopy = () => {
		alert("DO NOT COPY SoB")
	}
	mouseOver = (e) => {
		if (e.target.classList.contains('styled')) {
			e.target.classList.remove('styled');	
		} else {
			e.target.classList.add('styled');
		}
	}

	render() {
		return (
			<div>
				<h1 onMouseOver={this.mouseOver}>{this.props.title}</h1>
				<p onCopy={this.noCopy}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, sint.</p>
				<Cars color="Rouge">Toyota</Cars>
				<Cars>Aston Martin</Cars>
				<Cars color="Noire"></Cars>
			</div>
		);
	}
}

export default MyCars;