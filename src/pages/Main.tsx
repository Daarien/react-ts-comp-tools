import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Flex, Paper } from "../components";
import ButtonsPage from "./ButtonsPage";
import InputsPage from "./InputsPage";

export default function Main() {
  return (
    <Container>
      <header>
        <Link to="/">
          <h2>Main page</h2>
        </Link>
      </header>
      <main>
        <Paper>
          <Switch>
            <Route exact path="/" component={NavPage} />
            <Route path="/buttons" component={ButtonsPage} />
            <Route path="/inputs" component={InputsPage} />
          </Switch>
        </Paper>
      </main>
      <footer>
        <hr />
        <Flex justify="center">SberUser UI Library</Flex>
      </footer>
    </Container>
  );
}

function NavPage() {
  const routes = ["buttons", "inputs"];
  return (
    <main>
      <ul>
        {routes.map(route => (
          <li key={route}>
            <Link to={`/${route}`}>{route}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  main {
    flex-grow: 1;
  }
  footer {
    padding-bottom: 16px;
  }
`;
