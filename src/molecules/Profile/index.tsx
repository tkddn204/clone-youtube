import React from 'react';
import styled from 'styled-components';
import ProfileIcon from '../../atoms/Icons/ProfileIcon';

const ProfileBox = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-right: 16px;
`;

const ProfileButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0;
`

const Guide = () => <ProfileBox>
  <ProfileButton>
    <ProfileIcon/>
  </ProfileButton>
</ProfileBox>

export default Guide;