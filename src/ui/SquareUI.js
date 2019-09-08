import React from "react";

class SquareUI extends React.Component {
	render() {
		return (
			<button
				className="square"
				onClick={() => this.props.handleSquareClick(this)}
			>
				{this.props.board[this.props.i][this.props.j]}
			</button>
		);
	}
}

export default SquareUI;
