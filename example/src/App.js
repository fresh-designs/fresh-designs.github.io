import React, { Component } from "react";

import FreshCard from "fresh-designs";

export default class App extends Component {
  render() {
    return (
      <div>
        <FreshCard.FreshCard
          primaryText="Fresh Header"
          secondaryText="Secondary text a short brief about the card "
          buttonText="Details"
          onButtonClick={() => console.log("test")}
        />
      </div>
    );
  }
}
