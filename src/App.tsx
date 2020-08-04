import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  useEffect(() => {

  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
