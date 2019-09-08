import React from "react";
import BoardUI from "./BoardUI";
import Game from "../model/Game";
import Board from "../model/Board";

class GameUI extends React.Component {
	constructor(props) {
		super(props);
		this.game = new Game(new Board(3, 3));
		this.state = {
			game: this.game
		};

		this.handleSquareClick = this.handleSquareClick.bind(this);
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
					<div>{this.state.game.status}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}

	handleSquareClick(square) {
		const game = this.state.game;

		try {
			game.cross(square.props.i, square.props.j);
		} catch (e) {
			alert(e.message);
		}

		square.setState({
			game: game
		});
	}
}

export default GameUI;
