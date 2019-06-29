import React from "react";
import Hamburger from "../Buttons/HamBurger";
import styles from "./styles.css";
export interface SideBarProps {
  colorPrimary?: string;
  colorSecondary?: string;
  colorAccent?: string;
}
export interface IState {
  isOpen: boolean;
}

class SideBar extends React.PureComponent<SideBarProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: true
    };
  }
  toggleNav = () => {
    console.log("CloseNav");
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };
  render() {
    const { sidebar, closebtn, main } = styles;
    const { isOpen } = this.state;

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
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
        </div>
        <div className={main} style={{ marginLeft: isOpen ? 250 : 50 }}>
          {this.props.children}
        </div>
      </>
    );
  }
}
export default SideBar;
