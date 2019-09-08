import * as BoardUtils from "./BoardUtils";

export default function Game() {
	let history = [
		{
			board: BoardUtils.generateBoard(3, 3),
			current: "X",
			status: `Next player: X.`,
			canCross: true
		}
	];

	this.getGameStateHistory = () => history;

	this.getCurrentGameState = () => history[history.length - 1];

	this.returnToState = stateIndex => {
		const temp = new Array(stateIndex + 1);

		for (let i = 0; i < temp.length; i++) {
			temp[i] = history[i];
		}

		history = temp;
	};

	this.makeMove = (i, j) => {
		if (!this.getCurrentGameState().canCross) {
			throw new Error("Game is over.");
		}

		const newBoard = BoardUtils.copy(this.getCurrentGameState().board);

		BoardUtils.cross(newBoard, i, j, this.getCurrentGameState().current);

		const winner = getWinner(
			newBoard,
			this.getCurrentGameState().current,
			i,
			j
		);

		if (winner) {
			history.push({
				board: newBoard,
				current: null,
				status: `Winner: ${winner}.`,
				canCross: false
			});
		} else {
			if (BoardUtils.isFull(this.getCurrentGameState().board)) {
				history.push({
					board: newBoard,
					current: null,
					status: "Draw.",
					canCross: false
				});
			} else {
				const next =
					this.getCurrentGameState().current === "X" ? "Y" : "X";

				history.push({
					board: newBoard,
					current: next,
					status: `Next player: ${next}.`,
					canCross: true
				});
			}
		}

		return history[history.length - 1];
	};

	function getWinner(board, player, i, j) {
		if (BoardUtils.isInWinningState(board, i, j)) {
			return player;
		}

		return null;
	}
}
