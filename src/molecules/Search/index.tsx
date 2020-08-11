import React, {useState} from 'react';
import styled from 'styled-components';
import SearchInput from "../../atoms/SearchInput";
import SearchButton from "../../atoms/SearchButton";
import {fetchSearchResult, setChannelThumbnails} from '../../store/features/search-result-slice'
import {getAppState, store} from "../../store";
import {youtube} from "../../store/api/youtube";

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

  const searchVideos = async (e: any) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      const resultAction = await store.dispatch(fetchSearchResult({query:q}));
      if (fetchSearchResult.fulfilled.match(resultAction)) {
        getAppState().searchResult.videos.forEach(async (video: any) => {
          const channelId = video.snippet.channelId;
          try {
            const videoEtag = video.etag;
            const channelList = await youtube.getChannelListById(channelId);
            if (channelList) {
              store.dispatch(setChannelThumbnails({
                videoEtag,
                thumbnails: channelList.items[0].snippet.thumbnails
              }));
            }
          } catch (err) {
            console.error(err);
          }
        });
      } else {
        // error
        // if (resultAction.payload) {
        //   console.error(resultAction.payload.error);
        // } else {
        //   console.log();
        // }
      }
    }
  }

  return <SearchBox role="search">
    <SearchForm onSubmit={searchVideos}>
      <SearchInput onChange={onInputChange}/>
      <SearchButton/>
    </SearchForm>
  </SearchBox>
}

export default Search;