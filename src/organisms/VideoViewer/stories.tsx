import React from 'react';
import VideoViewer from '.';

export default {
  title: 'Molecule/VideoViewer',
  component: VideoViewer,
};

export const DefaultVideoViewer = () => <div>
  <VideoViewer video={{id: "oxoWhyS9buA", title: "test" }} />
</div>;