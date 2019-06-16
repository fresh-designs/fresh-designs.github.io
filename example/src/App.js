import React, { Component } from "react";
import "./App.css";

import FreshCard from "fresh-designs";

class App extends Component {
  render() {
    return (
      <div>
        <FreshCard.FreshCard
          primaryText="Testing Fresh Header"
          secondaryText="Test Test Test Test Test "
          buttonText="view details"
          onButtonClick={() => console.log("test")}
        />
        ;
      </div>
    );
  }
}

export default App;
