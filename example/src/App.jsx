import React, { Component } from "react";
import "./App.css";
import { Sidebar, FreshCard } from "fresh-designs";
import { FaTachometerAlt,FaUserAlt } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <>
        <Sidebar
          options={[
            { value: "Dahboard", icon: <FaTachometerAlt /> },
            { value: "Profile", icon: <FaUserAlt /> }
          ]}
        >
          <div style={{ maxWidth: 400, maxHeight: 700 }}>
            <FreshCard
              primaryText="Fresh Header"
              secondaryText="Secondary text a short brief about the card "
              buttonText="Details"
              onButtonClick={() => console.log("test")}
            />
          </div>
        </Sidebar>
      </>
    );
  }
}

export default App;
