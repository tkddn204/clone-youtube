import React, {useEffect} from 'react';
import {AppDispatch, getAppState} from "./store";
import {useDispatch} from "react-redux";
import {
  Switch,
  Route
} from "react-router";
import {ConnectedRouter} from "connected-react-router";
import { setSize } from "./store/features/screen-size-slice";
import Main from './pages/Main';
import Drawer from "./molecules/Drawer";
import Header from "./organisms/Header";

type AppProps = {
  history: any
}

function App(props: AppProps) {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      dispatch(setSize({width: newWidth, height: newHeight}));
    };

    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();

    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [dispatch]);

  return (
    <ConnectedRouter history={props.history}>
      <Drawer />
      <Header />
      <Switch>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
