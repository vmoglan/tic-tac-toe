import React from "react";

export default class TimeTravelButton extends React.Component {
	render() {
		return (
			<button
				onClick={() =>
					this.props.handleTimeTravel(this.props.stateIndex)
				}
			>
				Go
			</button>
		);
	}
}
