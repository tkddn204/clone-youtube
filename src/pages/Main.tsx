import React from 'react';
import styled from 'styled-components';
import PopularVideoList from '../organisms/PopularVideoList';

const MainBox = styled.div`
  height: 100%;
`;

const Main = () => <MainBox>
  <PopularVideoList />
</MainBox>

export default Main;