import React from "react";
import BoardComponent from "./Board";

class GameComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPlayer: "X",
			status: "Current Player: X"
		};

		this.boardRef = React.createRef();

		this.handleSquareClick = this.handleSquareClick.bind(this);

		this.colCount = 3;
		this.rowCount = 3;
	}

	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board
						key="board"
						ref={this.boardRef}
						handleSquareClick={this.handleSquareClick}
						colCount={this.colCount}
						rowCount={this.rowCount}
					/>
				</div>
				<div className="game-info">
					<div>{this.state.status}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}

	handleSquareClick(square) {
		const boardNode = this.boardRef.current;

		square.setState({
			value: this.state.currentPlayer
		});

		let status = "";
		let currentPlayer = "";

		if (this.isGameOver(square.props.i, square.props.j)) {
			status = `Winner: ${square.state.value}`;
		} else {
			if (this.isBoardFull()) {
				status = "Draw";
			} else {
				currentPlayer = this.state.currentPlayer == "X" ? "O" : "X";
				status = `Current player: ${this.state.currentPlayer}`;
			}
		}

		this.setState({
			currentPlayer: currentPlayer,
			status: status
		});
	}

	isBoardFull() {
		let isBoardFull = true;

		React.Children.map(this.boardRef.current.props.children, childNode => {
			if (!childNode.state.value) {
				isBoardFull = false;
			}
		});

		return isBoardFull;
	}

	isGameOver(i, j) {
		return (
			this.isHorizontalLine(i, j) ||
			this.isVerticalLine(i, j) ||
			this.isDiagonalLineDown(i, j) ||
			this.isDiagonalLineUp(i, j)
		);
	}

	isHorizontalLine(i, j) {
		for (let k = 0; k < this.colCount; k++) {
			if (
				this.getCell(i, k).state.value != this.getCell(i, j).state.value
			) {
				return false;
			}
		}

		return true;
	}

	isVerticalLine(i, j) {
		const rows = this.boardRef.current.rows;

		for (let k = 0; k < this.rowCount; k++) {
			if (
				this.getCell(k, j).state.value !==
				this.getCell(i, j).state.value
			) {
				return false;
			}
		}

		return true;
	}

	isDiagonalLineDown(i, j) {
		const rows = this.boardRef.current.rows;
		let k = 0;
		let l = 0;

		while (this.isWithinBounds(k, l)) {
			if (
				this.getCell(k, l).state.value !==
				this.getCell(i, j).state.value
			) {
				return false;
			}

			k++;
			l++;
		}

		return true;
	}

	isDiagonalLineUp(i, j) {
		const rows = this.boardRef.current.rows;
		let k = this.rowCount - 1;
		let l = 0;

		while (this.isWithinBounds(k, l)) {
			if (
				this.getCell(k, l).state.value != this.getCell(i, j).state.value
			) {
				return false;
			}

			k--;
			l++;
		}

		return true;
	}

	isWithinBounds(i, j) {
		return i >= 0 && i < this.rowCount && j >= 0 && j < this.colCount;
	}

	getCell(i, j) {
		return this.boardRef.current.getCell(i, j);
	}
}

export default Game;
