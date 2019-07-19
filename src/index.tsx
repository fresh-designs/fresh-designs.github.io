/**
 * @class FreshDesigns
 */

import FC from "./FreshCard";
import SB from "./SideBar";
/**
 *Sidebar Component
 *
 * Sample Usage
 *<Sidebar options={[
 *  { value: "Dahboard", icon: <Icon /> },
 *  { value: "Profile", icon: <Icon /> }]}>
 *    <div>DashBoard Content<div/>
 * <Sidebar/>
 *
 **/
export const Sidebar = SB;
/**
 *
 * FreshCard Component
 * A Simple Card component designed specially for dashboards
 **/
export const FreshCard = FC;
// import styles from "./styles.css";

// export type Props = { text: string };

// export default class ExampleComponent extends Component<Props> {
//   render() {
//     const { text } = this.props;

//     return <div className={styles.test}> Component: {text}</div>;
//   }
// }
export default { FreshCard, Sidebar };
