import React from 'react';
import { render } from '@testing-library/react';
import Guide from '../Guide';

describe('<Guide />', () => {
  test('render default guide', () => {
    const { container } = render(
      <Guide />
    );

    expect(container.querySelector('#guide-icon')).toBeInTheDocument();
  });
});