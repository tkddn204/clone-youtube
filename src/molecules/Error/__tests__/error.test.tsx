import React from 'react';
import {render} from '@testing-library/react';
import Error from '..';

describe('<Error />', () => {
  test('render default error', () => {
    const {container} = render(
      <Error/>
    );

    // expect(container.querySelector('#error-icon')).toBeInTheDocument();
  });
});