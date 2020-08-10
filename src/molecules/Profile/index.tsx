import React from 'react';
import styled from 'styled-components';
import { ProfileIcon } from '../../atoms/Icon';
import IconButton from "../../atoms/Paper/IconButton";

const ProfileBox = styled(IconButton)`
`;

const ProfileButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0;
`

const Guide = () => <ProfileBox>
  <ProfileButton>
    <ProfileIcon />
  </ProfileButton>
</ProfileBox>

export default Guide;