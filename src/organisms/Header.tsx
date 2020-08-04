import React from 'react';
import styled from 'styled-components';
import Guide from '../atoms/GuideIcon';
import Logo from '../atoms/LogoIcon';

const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px 0 16px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = () => <HeaderBox>
  <FlexBox>
    <Guide />
    <Logo />
  </FlexBox>
  <FlexBox></FlexBox>
  <FlexBox></FlexBox>
</HeaderBox>

export default Header;