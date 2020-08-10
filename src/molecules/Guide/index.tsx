import React from 'react';
import styled from 'styled-components';
import IconButton from "../../atoms/Paper/IconButton";
import { GuideIcon } from '../../atoms/Icon';

const GuideBox = styled(IconButton)`
  margin-right: 16px;
`;

const GuideButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0;
`

const Guide = () => <GuideBox>
  <GuideButton>
    <GuideIcon/>
  </GuideButton>
</GuideBox>

export default Guide;