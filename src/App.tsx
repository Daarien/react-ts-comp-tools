import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./components/styled-components";

import { theme } from "./components/theme";
import MainPage from "./pages/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route component={MainPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
