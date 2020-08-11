import React from 'react';
import {render} from '@testing-library/react';
import VideoList from '..';

describe('<VideoList />', () => {
  test('render default VideoList', () => {
    const {container} = render(
      <VideoList/>
    );

    expect(container.querySelector('#VideoList-icon')).toBeInTheDocument();
  });
});