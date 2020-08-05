import React from 'react';
import styled from 'styled-components';
import SearchIcon from "../Icons/SearchIcon";
// import { getAppState } from "../../store";

const Button = styled.button`
   background-color: #f8f8f8;
   width: 65px;
   border: 1px solid #d3d3d3;
   border-radius: 0 2px 2px 0;
   
   &:hover {
    border: 1px solid #c6c6c6;
    background-color: #f0f0f0;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
   }
`;

const InsideButton = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: middle;
  align-items: center;
  width: 20px;
  height: 20px;
  color: #333;
  opacity: 0.6;
   
  &:hover {
    opacity: 1;
  }
`;

const SearchButton = () => <Button
  aria-label="검색">
  <InsideButton>
    <SearchIcon/>
  </InsideButton>
</Button>

export default SearchButton;