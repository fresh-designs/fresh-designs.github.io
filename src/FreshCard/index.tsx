import React from "react";
import "./styles.css";
export interface FreshCardProps {
	colorPrimary?: string;
	colorSecondary?: string;
	colorAccent?: string;
	primaryText?: string;
	secondaryText?: string;
	height?:number
}
class FreshCard extends React.PureComponent<FreshCardProps, {}> {
	static defaultProps = {
		colorPrimary: "#da1b60",
		colorSecondary: "#ff8a00",
		colorAccent: "white",
		primaryText: "Fresh Text",
		secondaryText: "Fresh designs are really cool..!",
		height: 300
	};
	render() {
		const {
			colorPrimary,
			colorAccent,
			colorSecondary,
			primaryText,
			secondaryText,
			height
		} = this.props;
		const buttonStyle = {
			backgroundImage: `linear-gradient(to top,${colorSecondary},${colorPrimary})`,
			color: colorAccent || "blue",
			height
		};
		return (
			<div
				style={buttonStyle}
				className="content fresh-simplecard"
				onClick={() => console.log("test")}
			>
				<div className="fresh-primary-text">{primaryText}</div>
				<div className="fresh-secondary-text">{secondaryText}</div>
			</div>
		);
	}
}
export default FreshCard;
