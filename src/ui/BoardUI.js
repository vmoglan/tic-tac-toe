import React from "react";
import SquareUI from "./SquareUI";

class BoardUI extends React.Component {
	render() {
		const rows = [];

		for (let i = 0; i < this.props.board.length; i++) {
			rows.push(this.renderRow(i));
		}

		return rows;
	}

	renderRow(i) {
		const cells = [];

		for (let j = 0; j < this.props.board[i].length; j++) {
			cells.push(this.renderSquare(i, j));
		}

		return <div className="board-row">{cells}</div>;
	}

	renderSquare(i, j) {
		return (
			<SquareUI
				key={`square${i + j}`}
				board={this.props.board}
				i={i}
				j={j}
				handleSquareClick={this.props.handleSquareClick}
			/>
		);
	}
}

export default BoardUI;
