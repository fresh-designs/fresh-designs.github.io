import React from "react";
import styles from "./styles.css";
export interface FreshCardProps {
  colorPrimary?: string;
  colorSecondary?: string;
  colorAccent?: string;
  primaryText: string;
  secondaryText?: string;
  buttonText?: string;
  height?: number;
  onButtonClick?: (e: React.MouseEvent) => void;
}
class FreshCard extends React.PureComponent<FreshCardProps, {}> {
  static defaultProps = {
    colorPrimary: "#da1b60",
    colorSecondary: "#ff8a00",
    colorAccent: "white",
    primaryText: "primaryText is missing in the props",
    secondaryText: "",
    onButtonClick: () => undefined
  }
  render() {
    const {
      colorPrimary,
      colorAccent,
      colorSecondary,
      primaryText,
      secondaryText,
      height,
      buttonText,
      onButtonClick
    } = this.props;
    const buttonStyle = {
      backgroundImage: `linear-gradient(to top,${colorSecondary},${colorPrimary})`,
      color: colorAccent || "blue",
      height
    };
    const {
      freshPrimaryText,
      freshSecondaryText,
      hoverShadow,
      freshSimplecard,
      animateUp,
      freshButton
    } = styles;
    return (
      <div
        style={buttonStyle}
        className={`${freshSimplecard}`}
        onClick={() => console.log("test")}
      >
        <div className={`${freshPrimaryText} ${animateUp} ${hoverShadow}`}>
          {primaryText}
        </div>
        <div className={`${freshSecondaryText} ${hoverShadow}`}>
          {secondaryText}
        </div>
        {buttonText && (
          <button
            className={`${freshButton}`}
            onClick={onButtonClick}
          >
            <span >{buttonText}</span>
          </button>
        )}
      </div>
    );
  }
}
export default FreshCard;
