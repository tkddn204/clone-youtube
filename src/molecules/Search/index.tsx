import React, {useState} from 'react';
import styled from 'styled-components';
import SearchInput from "../../atoms/SearchInput";
import SearchButton from "../../atoms/SearchButton";
import Youtube from '../../store/api/youtube';

const SearchBox = styled.div`
  flex: 1;
  margin: 0 0 0 40px;
  padding: 0 4px;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Search = () => {
  const [query, setQuery] = useState('');
  const onInputChange = (e: any) => setQuery(e.target.value.trim());

  const searchVideos = (e: any) => {
    e.preventDefault();
    console.log(query);
    Youtube.search(query).then(console.log);
  }

  return <SearchBox role="search">
    <SearchForm onSubmit={searchVideos}>
      <SearchInput onChange={onInputChange}/>
      <SearchButton/>
    </SearchForm>
  </SearchBox>
}

export default Search;