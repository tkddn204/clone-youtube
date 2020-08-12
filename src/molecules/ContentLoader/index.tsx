import React from 'react';
import ContentLoader from "react-content-loader";

const VideoItemContentLoader = () => <ContentLoader
  viewBox="0 0 249 245"
  width={249}
  height={245}
  speed={2}
>
  <rect x="10" y="10" rx="0" ry="0" width="249" height="140"/>
  <circle cx="30" cy="185" r="20"/>
  <rect x="65" y="165" rx="0" ry="0" width="160" height="15"/>
  <rect x="65" y="195" rx="0" ry="0" width="100" height="15"/>
  <rect x="65" y="215" rx="0" ry="0" width="160" height="15"/>
</ContentLoader>

export default {
  VideoItemContentLoader
};