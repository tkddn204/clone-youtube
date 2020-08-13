import React from 'react';
import {render} from '@testing-library/react';
import Drawer from '..';

describe('<Drawer />', () => {
  test('render default drawer', () => {
    const {container} = render(
      <Drawer/>
    );

    // expect(container.querySelector('#drawer-icon')).toBeInTheDocument();
  });
});