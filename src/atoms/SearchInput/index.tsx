import React, {FC} from 'react';
import styled from 'styled-components';
// import { getAppState } from "../../store";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  position: relative;
  align-items: center;
  background-color: white;
  border:1px solid #ccc;
  border-right: none;
  border-radius: 2px 0 0 2px;
  box-shadow: inset 0 1px 2px #eee;
  color: #111111;
  padding: 2px 6px;
`;

const Input = styled.input`
  flex: 1;
  height: auto;
  width: 100%;
  user-select: auto;
  border: none;
  outline: none;
  color: black;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: inherit;
  background-color: transparent;
`;

interface SearchInputProps {
  onChange: (event: any) => void;
}

const SearchInput: FC<SearchInputProps> = (props: SearchInputProps) => <Container>
  <Input
    aria-autocomplete="list"
    name="search"
    type="text"
    placeholder="검색"
    onChange={props.onChange}
  />
</Container>

export default SearchInput;