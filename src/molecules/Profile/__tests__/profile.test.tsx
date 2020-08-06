import React from 'react';
import {render} from '@testing-library/react';
import Profile from '..';

describe('<Profile />', () => {
  test('render default profile', () => {
    const {container} = render(
      <Profile/>
    );

    expect(container.querySelector('#profile-icon')).toBeInTheDocument();
  });
});