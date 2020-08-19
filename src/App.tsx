import React from 'react';
import {
  Switch,
  Route
} from "react-router";
import {ConnectedRouter} from "connected-react-router";
import Main from './pages/Main';
import Drawer from "./molecules/Drawer";
import Header from "./organisms/Header";
import { useResize } from "./utils";
import VideoPlayer from "./pages/VideoPlayer";
import styled from "styled-components";

type AppProps = {
  history: any
}

const Container = styled.main`
  height: 100vh;
`;

function App(props: AppProps) {
  useResize();

  return (
    <ConnectedRouter history={props.history}>
      <Drawer />
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/video/:id">
            <VideoPlayer />
          </Route>
          <Route path="*">
            <h1>No Match Page</h1>
          </Route>
        </Switch>
      </Container>
    </ConnectedRouter>
  );
}

export default App;
