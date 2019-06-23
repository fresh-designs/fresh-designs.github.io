# fresh-designs

> A fresh design library for reactJS with fresh components

[![NPM](https://img.shields.io/npm/v/fresh-designs.svg)](https://www.npmjs.com/package/fresh-designs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save fresh-designs
```
## Table of Contents

- [Fresh Card](#fresh-card)

### Fresh Card

```tsx
import React, { Component } from "react";
import {FreshCard} from "fresh-designs";

class App extends Component {
  render() {
    return (
      <div>
        <FreshCard
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

```

## License

MIT © [soorajshankar](https://github.com/soorajshankar)

### This project and the components are in development.