import React from 'react';
import styled from 'styled-components';

const UploadIconSVG = styled.svg`
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

const UploadIcon = () => <UploadIconSVG id="upload-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                                        focusable="false">
  <g>
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
  </g>
</UploadIconSVG>

export default UploadIcon;