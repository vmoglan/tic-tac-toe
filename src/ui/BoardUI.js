import React from "react";
import SquareUI from "./SquareUI";

class BoardUI extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const rows = [];

		for (let i = 0; i < this.props.rowCount; i++) {
			rows.push(this.renderRow(i));
		}

		return rows;
	}

	renderRow(i) {
		const cells = [];

		for (let j = 0; j < this.props.rowCount; j++) {
			cells.push(this.renderSquare(i, j));
		}

		return <div className="board-row">{cells}</div>;
	}

	renderSquare(i, j) {
		return (
			<SquareUI
				key={`square${i + j}`}
				game={this.props.game}
				i={i}
				j={j}
				handleSquareClick={this.props.handleSquareClick}
			/>
		);
	}
}

export default BoardUI;
