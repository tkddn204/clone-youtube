import React from 'react';
import { render } from '@testing-library/react';
import Guide from '../../../components/icons/guide';

test('render default guide', () => {
  const { container } = render(
    <Guide />
  );

  expect(container.querySelector('#logo-default-text-paths')).toBeInTheDocument();
});
