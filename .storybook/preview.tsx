import React, {Fragment} from 'react';
import {addDecorator, addParameters} from "@storybook/react";
import {MemoryRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../src/store";
import GlobalStyle from "../src/styles/global-style";
import {configureActions} from "@storybook/addon-actions";
import {useResize} from "../src/utils";

// msw server
if (typeof global.process === 'undefined') {
  import('../src/mocks/browser').then(({ worker }) => {worker.start()});
}

// addon-actions config
configureActions({
  depth: 3,
  limit: 20
})

// global style
addDecorator(storyFn => <Fragment>
  <GlobalStyle/>
  {storyFn()}
</Fragment>);

// redux
addDecorator(storyFn => {
  const WithResize = (): any => {
    useResize();
    return storyFn();
  }
  return <Provider store={store}>
    <WithResize />
  </Provider>;
});

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