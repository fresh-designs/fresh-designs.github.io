import * as React from "react";
import Hamburger from "../Buttons/HamBurger";
import styles from "./styles.css";
export interface ISideBarProps {
  colorPrimary?: string;
  colorSecondary?: string;
  colorAccent?: string;
  options?: option[];
}
export interface option {
  /**
   *@icon: JSX/ React Node for rendering the icon
   */
  icon: JSX.Element;
  /**
   *@value: value to be shown on the sidebar menu
   */
  value: string;
  /**
   *@value: value to be shown on the sidebar menu
   */
  onClick: Function;
}
export interface IState {
  isOpen: boolean;
}
/**
 *Sidebar Component
 *
 * Sample Usage
 *<Sidebar options={[
 *  { value: "Dahboard", icon: <FaBeer /> },
 *  { value: "Profile", icon: <FaBeer /> }]}>
 *    <div>DashBoard Content<div/>
 * <Sidebar/>
 *
 **/
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
    const { sidebar, closebtn, main, open, closed } = styles;
    const { isOpen } = this.state;
    const { options = [] } = this.props;
    console.log(options);

    return (
      <>
        <div id="mySidebar" className={`${sidebar} ${isOpen ? open : closed}`}>
          <a onClick={this.toggleNav} className={closebtn}>
            <Hamburger isOpen={isOpen} />
          </a>
          {options.map(({ value, icon, onClick = () => {} }, index) => (
            <a href="javascript:void" onClick={() => onClick()} key={index}>
              <i>{icon}</i>
              <span style={{ paddingLeft: 10 }}>{value}</span>
            </a>
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
