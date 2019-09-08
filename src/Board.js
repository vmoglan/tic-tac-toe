import React from "react";
import Square from "./Square";

class Board extends React.Component {
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
			<Square
				key={`square${i + j}`}
				i={i}
				j={j}
				handleSquareClick={this.props.handleSquareClick}
			/>
		);
	}

	getCell(k, l) {
		React.Children.toArray(this.props.children);

		const childNodes = this.props.children;

		for (let i = 0; i < childNodes.length; i++) {
			if (childNodes[i].props.i === k && childNodes[i].props.j === l) {
				return childNodes[i];
			}
		}

		return null;
	}
}

export default Board;
