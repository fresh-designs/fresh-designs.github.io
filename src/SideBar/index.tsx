import React from "react";
import Hamburger from "../Buttons/HamBurger";
import styles from "./styles.css";
export interface ISideBarProps {
  colorPrimary?: string;
  colorSecondary?: string;
  colorAccent?: string;
  options?: string[];
}
export interface IState {
  isOpen: boolean;
}

class SideBar extends React.PureComponent<ISideBarProps, IState> {
  static defaultProps = {
    options: []
  };
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggleNav = () => {
    console.log("CloseNav");
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };
  render() {
    const { sidebar, closebtn, main } = styles;
    const { isOpen } = this.state;
    const { options = [] } = this.props;

    return (
      <>
        <div
          id="mySidebar"
          className={sidebar}
          style={{ width: isOpen ? 250 : 50 }}
        >
          <a onClick={this.toggleNav} className={closebtn}>
            <Hamburger isOpen={isOpen} />
          </a>
          {options.map(option => (
            <a href="#">{option}</a>
          ))}
        </div>
        <div className={main} style={{ marginLeft: isOpen ? 250 : 50 }}>
          {this.props.children}
        </div>
      </>
    );
  }
}
export default SideBar;
