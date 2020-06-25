This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn dist`

Compiles components to the `dist` folder for further publishing .<br />

## Installation

UI library is available as an [npm package](https://www.npmjs.com/package/react-ts-comp-tools).

```sh
// with npm
npm install react-ts-comp-tools

// with yarn
yarn add react-ts-comp-tools
```

**How to use**

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-ts-comp-tools/dist/styled-components";
import { theme } from "react-ts-comp-tools/dist/theme";
import { Button } from "react-ts-comp-tools/dist";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button primary variant="contained">
        Styled button
      </Button>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```
