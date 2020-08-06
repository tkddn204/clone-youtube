import React from 'react';
import styled from 'styled-components';

const ProfileIconSVG = styled.svg`
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

const ProfileIcon = () => <ProfileIconSVG id="Profile-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                                        focusable="false">
  <g>
    <path d="M12,0 C18.62375,0 24,5.37625 24,12 C24,18.62375 18.62375,24 12,24 C5.37625,24 0,18.62375 0,12 C0,5.37625 5.37625,0 12,0 Z M12,10.63625 C13.66,10.63625 15,9.29625 15,7.63625 C15,5.97625 13.66,4.63625 12,4.63625 C10.34,4.63625 9,5.97625 9,7.63625 C9,9.29625 10.34,10.63625 12,10.63625 Z M12,12.40875 C8.33375,12.40875 5.455,14.18125 5.455,15.8175 C6.84125,17.95 9.26875,19.3625 12,19.3625 C14.73125,19.3625 17.15875,17.95 18.545,15.8175 C18.545,14.18125 15.66625,12.40875 12,12.40875 Z"></path>
  </g>
</ProfileIconSVG>

export default ProfileIcon;