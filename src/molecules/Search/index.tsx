import React, {useState} from 'react';
import styled from 'styled-components';
import SearchInput from "../../atoms/SearchInput";
import SearchButton from "../../atoms/SearchButton";
import {fetchSearchResultThunk, actions} from '../../store/features/fetch-video-slice'
import {AppDispatch, getAppState} from "../../store";
import {youtube} from "../../store/api/youtube";
import {useDispatch} from "react-redux";

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
  const dispatch: AppDispatch = useDispatch();
  const [query, setQuery] = useState('');
  const onInputChange = (e: any) => setQuery(e.target.value.trim());

  const searchVideos = async (e: any) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      const resultAction = await dispatch(fetchSearchResultThunk({query: q}));
      if (fetchSearchResultThunk.fulfilled.match(resultAction)) {
        for (const video of getAppState().searchResult.videos) {
          const channelId = video.snippet.channelId;
          try {
            const videoEtag = video.etag;
            const channelList = await youtube.getChannelListById(channelId);
            if (channelList) {
              dispatch(actions.setSearchChannelThumbnails({
                videoEtag,
                thumbnails: channelList.items[0].snippet.thumbnails
              }));
            }
          } catch (err) {
            console.error(err);
          }
        }
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