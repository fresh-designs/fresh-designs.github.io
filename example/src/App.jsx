import React, { Component } from "react";
import "./App.css";

import { Sidebar, FreshCard ,ImageLoader} from "fresh-designs";
const onClick=test=>console.log("test")
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar options={[,{icon:"T",value:"Test",onClick},{icon:"T",value:"Test",onClick}]}>
          <div style={{ maxWidth: 400, maxHeight: 700 }}>
            <FreshCard
              primaryText="Testing Fresh Header"
              secondaryText="Test Test Test Test Test "
              buttonText="Details"
              onButtonClick={() => console.log("test")}
            />
            <ImageLoader src="https://images.unsplash.com/photo-1494247622028-9a5bbfbf529a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1952&q=80"/>
          </div>
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default App;
