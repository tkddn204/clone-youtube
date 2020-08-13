import React from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Content from '../organisms/Content';
import Drawer from "../molecules/Drawer";

const MainBox = styled.div`
`;

const Main = () => <MainBox>
  <Drawer />
  <Header />
  <Content />
</MainBox>

export default Main;