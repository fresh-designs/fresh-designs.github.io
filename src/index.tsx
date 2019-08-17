/**
 * @class ExampleComponent
 */

import * as React from "react";

import styles from "./styles.css";
import FC from "./FreshCard";
import IL from "./ImageLoader";
import SB from "./SideBar";
export const FreshCard = FC;
export const Sidebar = SB;
export const ImageLoader = IL;
export default { FreshCard, Sidebar, ImageLoader };

export type Props = { text: string };

export class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return (
      <div className={styles.test}>
        Example Component: {text}
        <FreshCard
          primaryText="Fresh Header"
          secondaryText="Secondary text a short brief about the card "
          buttonText="Details"
          onButtonClick={() => console.log("test")}
        />
      </div>
    );
  }
}
