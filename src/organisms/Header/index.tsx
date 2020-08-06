import React from 'react';
import styled from 'styled-components';
import Guide from '../../molecules/Guide';
import Logo from '../../molecules/Logo';
import Search from "../../molecules/Search";
import Upload from "../../molecules/Upload";
import Profile from "../../molecules/Profile";

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

const MiddleBox = styled(FlexBox)`
`;

const RightBox = styled(FlexBox)`
  min-width: 225px;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = () => <HeaderBox>
  <LeftBox>
    <Guide/>
    <Logo/>
  </LeftBox>
  <MiddleBox>
    <Search />
  </MiddleBox>
  <RightBox>
    <Upload />
    <Profile />
  </RightBox>
</HeaderBox>

export default Header;