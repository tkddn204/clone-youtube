import React, {Fragment} from 'react';
import {addDecorator} from "@storybook/react";
import {MemoryRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../src/store";
import GlobalStyle from "../src/styles/global-style";

// global style
addDecorator(storyFn => <Fragment>
  <GlobalStyle/>
  {storyFn()}
</Fragment>);

// redux
addDecorator(storyFn => <Provider store={store}>
  {storyFn()}
</Provider>);

// react-router
addDecorator(storyFn => <MemoryRouter>
  {storyFn()}
</MemoryRouter>);