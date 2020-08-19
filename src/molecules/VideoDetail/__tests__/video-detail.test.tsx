import React from 'react';
import {render} from '@testing-library/react';
import VideoDetail, {VideoDetailProps} from '..';

describe('<VideoDetail />', () => {
  test('render default video detail', () => {
    const props: VideoDetailProps = {
      video: {
        id: 'asdfas',
        channelName: '채널이름',
        title: "비디오 타이틀",
        description: "비디오 설명",
        viewCount: "12345",
        publishedAt: new Date(),
        channelThumbnailSrc: "src",
        thumbnailSrc: "src",
        tags: ["#태그1", "#태그2", "#태그3"],
        isStreaming: false
      }
    }

    const {container} = render(
      <VideoDetail {...props} />
    );

  });
});