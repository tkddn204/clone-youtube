import React from 'react';
import {render} from '@testing-library/react';
import VideoView from '..';

describe('<VideoView />', () => {
  test('render default video view', () => {
    const {container} = render(
      <VideoView/>
    );

  });
});