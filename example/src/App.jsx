import React, { Component } from "react";
import "./App.css";

import { Sidebar, FreshCard } from "fresh-designs";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar>
          <div style={{ maxWidth: 400, maxHeight: 700 }}>
            <FreshCard
              primaryText="Testing Fresh Header"
              secondaryText="Test Test Test Test Test "
              buttonText="Details"
              onButtonClick={() => console.log("test")}
            />
          </div>
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default App;
