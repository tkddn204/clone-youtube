import React from 'react';
import {render} from '@testing-library/react';
import Logo from '..';

describe('<Logo />', () => {
  test('render default logo', () => {
    const {container} = render(
      <Logo/>
    );

    expect(container.querySelector('#logo-default-text-paths')).toBeInTheDocument();
  });

  test('render premium logo', () => {
    const { container } = render(
      <Logo logoType="premium" />
    );

    expect(container.querySelector('#logo-premium-text-paths')).toBeInTheDocument();
  });
});