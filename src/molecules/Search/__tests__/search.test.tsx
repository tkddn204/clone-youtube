import React from 'react';
import {render} from '@testing-library/react';
import Search from '..';

describe('<Search />', () => {
  test('render default search', () => {
    const {container} = render(
      <Search/>
    );

    expect(container.querySelector('#search-icon')).toBeInTheDocument();
  });
});