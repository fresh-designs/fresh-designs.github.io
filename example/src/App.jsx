import React, { Component } from "react";
import "./App.css";

import { Sidebar, FreshCard, ImageLoader } from "fresh-designs";
const onClick = test => console.log("test");
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar
          options={[
            ,
            { icon: "T", value: "Test", onClick },
            { icon: "T", value: "Test", onClick }
          ]}
        >
          <div style={{ maxWidth: 400, maxHeight: 700 }}>
            <FreshCard
              primaryText="Testing Fresh Header"
              secondaryText="Test Test Test Test Test "
              buttonText="Details"
              onButtonClick={() => console.log("test")}
            />
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
              <ImageLoader
                src={`https://source.unsplash.com/random?cache="${i +
                  Math.random()}`}
              />
            ))}
          </div>
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default App;
