import React, {Fragment} from 'react';
import {addDecorator, addParameters} from "@storybook/react";
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

// backgrounds
addParameters({
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "gray", value: "#f9f9f9" },
    { name: "black", value: "#000000" },
  ]
});