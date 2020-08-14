import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../molecules/HeaderLogo';
import Search from "../../molecules/Search";
import IconButton from "../../atoms/Paper/IconButton";
import {ProfileIcon, UploadIcon} from "../../atoms/Icon";

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
    <HeaderLogo />
  </LeftBox>
  <MiddleBox>
    <Search />
  </MiddleBox>
  <RightBox>
    <IconButton icon={UploadIcon} />
    <IconButton icon={ProfileIcon} />
  </RightBox>
</HeaderBox>

export default Header;