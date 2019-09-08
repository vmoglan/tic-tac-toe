export function generateBoard(rowCount, colCount) {
	const board = new Array(rowCount);

	for (let i = 0; i < rowCount; i++) {
		board[i] = new Array(colCount);
	}

	return board;
}

export function copy(board) {
	const newBoard = new Array(board.length);

	for (let i = 0; i < board.length; i++) {
		newBoard[i] = new Array(board[i].length);

		for (let j = 0; j < board[i].length; j++) {
			newBoard[i][j] = board[i][j];
		}
	}

	return newBoard;
}

export function cross(board, i, j, s) {
	if (isFull(board)) {
		throw new Error("Board is full.");
	}

	if (board[i][j]) {
		throw new Error("Case has already been filled.");
	}

	board[i][j] = s;
}

export function isFull(board) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (!board[i][j]) {
				return false;
			}
		}
	}

	return true;
}

export function isWithinBounds(board, i, j) {
	return i >= 0 && i < board.length && j >= 0 && j < board[0].length;
}

export function isInWinningState(board, i, j) {
	return (
		hasHorizontalLine(board, i, j) ||
		hasVerticalLine(board, i, j) ||
		hasDiagonalLineDown(board, i, j) ||
		hasDiagonalLineUp(board, i, j)
	);
}

function hasHorizontalLine(board, i, j) {
	for (let k = 0; k < board[0].length; k++) {
		if (board[i][k] !== board[i][j]) {
			return false;
		}
	}

	return true;
}

function hasVerticalLine(board, i, j) {
	for (let k = 0; k < board.length; k++) {
		if (board[k][j] !== board[i][j]) {
			return false;
		}
	}

	return true;
}

function hasDiagonalLineDown(board, i, j) {
	let k = 0;
	let l = 0;

	while (isWithinBounds(board, k, l)) {
		if (board[k][l] !== board[i][j]) {
			return false;
		}

		k++;
		l++;
	}

	return true;
}

function hasDiagonalLineUp(board, i, j) {
	let k = board.length - 1;
	let l = 0;

	while (isWithinBounds(board, k, l)) {
		if (board[k][l] !== board[i][j]) {
			return false;
		}

		k--;
		l++;
	}

	return true;
}
