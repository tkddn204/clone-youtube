import React from 'react';
import {render} from '@testing-library/react';
import HeaderLogo from '..';

describe('<HeaderLogo />', () => {
  test('render default header logo', () => {
    const {container} = render(
      <HeaderLogo/>
    );

    expect(container.querySelector('#logo-default-text-paths')).toBeInTheDocument();
  });

  test('render premium logo', () => {
    const { container } = render(
      <HeaderLogo logoType="premium" />
    );

    expect(container.querySelector('#logo-premium-text-paths')).toBeInTheDocument();
  });
});