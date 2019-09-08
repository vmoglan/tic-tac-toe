import React from "react";

class SquareUI extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				className="square"
				onClick={() => this.props.handleSquareClick(this)}
			>
				{this.props.game.board.grid[(this.props.i, this.props.j)]}
			</button>
		);
	}
}

export default SquareUI;
