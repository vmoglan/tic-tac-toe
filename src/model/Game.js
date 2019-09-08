export default class Game {
	constructor(board) {
		this.board = board;
		this.current = "X";
		this.status = `Current player: ${this.current}`;
	}

	cross(i, j) {
		if (this.board.grid[i][j]) {
			throw new Error("That cell is already written.");
		}

		this.current = this.current === "X" ? "Y" : "X";

		if (this.isGameOverAfterCross(i, j)) {
			this.status = `Winner: ${this.current}`;

			return;
		}

		if (this.board.isFull()) {
			this.status = "Draw";

			return;
		}

		this.board.grid[i][j] = this.current;
		this.status = `Current player: ${this.current}`;
	}

	isGameOverAfterCross(i, j) {
		return (
			this.board.hasHorizontalLine(i, j) ||
			this.board.hasVerticalLine(i, j) ||
			this.board.hasDiagonalLineDown(i, j) ||
			this.board.hasDiagonalLineUp(i, j)
		);
	}
}
