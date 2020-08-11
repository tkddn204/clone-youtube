import React from 'react';
import VideoItem from '.';

export default {
  title: 'Molecule/VideoList',
  component: VideoItem,
};

const videoFixture = {
  thumbnailSrc: "https://i.ytimg.com/vi/J08K5e73F2k/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCuDcrHdW7bVq36DTCCQ7ChQ1ZIRQ",
  title: "직업이 뭐냐고 세번째 물어봅니다",
  channelName: "승우아빠",
  channelThumbnailSrc: "https://yt3.ggpht.com/a-/AOh14GhrA9GgRH8SMFEgq05ByvdxU0nE__uYMdqLog=s68-c-k-c0x00ffffff-no-rj-mo",
  viewCount: "41만",
  creationTime: "8개월 전",
  isStreaming: false
};

export const DefaultVideoItem = () => <div>
  <VideoItem
    video={videoFixture}
    key="vid1"
  />
</div>;