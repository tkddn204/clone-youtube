import React from 'react';
import styled from 'styled-components';
import GuideIcon from '../../atoms/Icons/GuideIcon';

const GuideBox = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
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