import React from "react";
import BoardUI from "./BoardUI";
import Game from "../model/Game";
import TimeTravelButton from "./TimeTravelButton";

class GameUI extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentGameState: this.props.game.getCurrentGameState(),
			gameStateHistory: this.props.game.getGameStateHistory()
		};

		this.handleSquareClick = this.handleSquareClick.bind(this);
		this.handleTimeTravel = this.handleTimeTravel.bind(this);
	}

	render() {
		return (
			<div className="game">
				<div className="game-board">
					<BoardUI
						key="board"
						handleSquareClick={this.handleSquareClick}
						board={this.state.currentGameState.board}
					/>
				</div>
				<div className="game-info">
					<div>{this.state.currentGameState.status}</div>
					<ol>{this.renderHistoryItems()}</ol>
				</div>
			</div>
		);
	}

	renderHistoryItems() {
		let historyItems = [];
		let i = 0;

		this.state.gameStateHistory.forEach(s => {
			if (i === 0) {
				historyItems.push(
					<li>
						{`Game start.`}
						<TimeTravelButton
							handleTimeTravel={this.handleTimeTravel}
							stateIndex={i}
						>
							Go.
						</TimeTravelButton>
					</li>
				);
			} else {
				historyItems.push(
					<li key={`move-${i}`}>
						{`Move #${i}`}
						<TimeTravelButton
							handleTimeTravel={this.handleTimeTravel}
							stateIndex={i}
						>
							Go.
						</TimeTravelButton>
					</li>
				);
			}

			i++;
		});

		return historyItems;
	}

	handleSquareClick(square) {
		try {
			const currentGameState = this.props.game.makeMove(
				square.props.i,
				square.props.j
			);

			this.setState({
				currentGameState: currentGameState
			});
		} catch (e) {
			alert(e.message);
		}
	}

	handleTimeTravel(stateIndex) {
		this.props.game.returnToState(stateIndex);

		this.setState({
			currentGameState: this.props.game.getCurrentGameState(),
			gameStateHistory: this.props.game.getGameStateHistory()
		});
	}
}

export default GameUI;
