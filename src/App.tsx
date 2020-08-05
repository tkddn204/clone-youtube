import React from 'react';
import {
  Switch,
  Route
} from "react-router";
import Main from './pages/Main';
import {ConnectedRouter} from "connected-react-router";

type AppProps = {
  history: any
}

function App(props: AppProps) {
  return (
    <ConnectedRouter history={props.history}>
      <div>
        <Switch>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default App;
