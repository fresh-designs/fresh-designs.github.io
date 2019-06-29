import React from "react";
import styles from "./styles.css";
export interface IProps {
  isOpen: boolean;
  className?: string;
  onClick?: () => void;
}

const HamBurger: React.FC<IProps> = ({
  isOpen,
  onClick = () =>
    console.warn("Please provide onClick Prop to Hamurger Component")
}: IProps) => {
  const { container, bar1, bar2, bar3, change } = styles;
  return (
    <div className={`${container} ${isOpen && change}`} onClick={onClick}>
      <div className={bar1} />
      <div className={bar2} />
      <div className={bar3} />
    </div>
  );
};
export default HamBurger;
