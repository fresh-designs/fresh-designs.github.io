import React, { Component } from "react";
import "./App.css";

import FreshCard, { Sidebar } from "fresh-designs";

class App extends Component {
  render() {
    return (
      <>
        <Sidebar>
          <div style={{ maxWidth: 400, maxHeight: 700 }}>
            <FreshCard.FreshCard
              primaryText="Testing Fresh Header"
              secondaryText="Test Test Test Test Test "
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
