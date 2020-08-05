import React from 'react';
import styled from 'styled-components';
import Guide from '../../molecules/Guide';
import Logo from '../../molecules/Logo';

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

const LeftBox = styled(FlexBox)`
`;

const Index = () => <HeaderBox>
  <LeftBox>
    <Guide/>
    <Logo/>
  </LeftBox>
  <FlexBox></FlexBox>
  <FlexBox></FlexBox>
</HeaderBox>

export default Index;