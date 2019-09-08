export default class Board {
	constructor(rowCount, colCount) {
		this.grid = new Array(rowCount);

		for (let i = 0; i < rowCount; i++) {
			this.grid[i] = new Array(colCount);

			for (let j = 0; j < colCount; j++) {
				this.grid[i][j] = "";
			}
		}
	}

	hasHorizontalLine(i, j) {
		for (let k = 0; k < this.grid[i].length; k++) {
			if (this.grid[i][k] !== this.grid[i][j]) {
				return false;
			}
		}

		return true;
	}

	hasVerticalLine(i, j) {
		for (let k = 0; k < this.grid.length; k++) {
			if (this.grid[k][j] !== this.grid[i][j]) {
				return false;
			}
		}

		return true;
	}

	hasDiagonalLineDown(i, j) {
		let k = 0;
		let l = 0;

		while (this.isWithinBounds(k, l)) {
			if (this.grid[k][l] !== this.grid[i][j]) {
				return false;
			}

			k++;
			l++;
		}

		return true;
	}

	hasDiagonalLineUp(i, j) {
		let k = this.rowCount - 1;
		let l = 0;

		while (this.isWithinBounds(k, l)) {
			if (this.grid[k][l] !== this.grid[i][j]) {
				return false;
			}

			k--;
			l++;
		}

		return true;
	}

	isFull() {
		for (let i = 0; i < this.grid.length; i++) {
			for (let j = 0; j < this.grid[i].length; j++) {
				if (!this.grid[i][j]) {
					return false;
				}
			}
		}

		return true;
	}

	isWithinBounds(i, j) {
		return (
			i >= 0 && i < this.grid.length && j >= 0 && j < this.grid[0].length
		);
	}
}
