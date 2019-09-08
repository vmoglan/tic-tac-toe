import React from "react";
import Game from "./Board";

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			game: 
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

	

	isWithinBounds(i, j) {
		return i >= 0 && i < this.rowCount && j >= 0 && j < this.colCount;
	}
}

export default Game;
