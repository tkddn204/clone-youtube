import React from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Content from '../organisms/PopularVideoList';
import Drawer from "../molecules/Drawer";

const MainBox = styled.div`
`;

const Main = () => <MainBox>
  <Content />
</MainBox>

export default Main;