import React from 'react';
import styled from 'styled-components';

const GuideSVG = styled.svg`
  user-select: auto;
  pointer-events: none;
  display: block;
  width: 100%;
  height: 100%;
  & > g {
    user-select: auto;
  }
  & > path {
    user-select: auto;
  }
`;

const Guide = () => <GuideSVG id="guide-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
  <g>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </g>
</GuideSVG>

export default Guide;