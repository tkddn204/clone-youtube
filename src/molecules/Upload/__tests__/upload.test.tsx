import React from 'react';
import {render} from '@testing-library/react';
import Upload from '..';

describe('<Upload />', () => {
  test('render default upload', () => {
    const {container} = render(
      <Upload/>
    );

    expect(container.querySelector('#upload-icon')).toBeInTheDocument();
  });
});