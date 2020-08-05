import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import App from '../App';
import {createBrowserHistory} from 'history';

describe('<App />', () => {
  test('match snapshot', () => {
    const history = createBrowserHistory();
    const {container} = render(
      <Provider store={store}>
        <App history={history}/>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});