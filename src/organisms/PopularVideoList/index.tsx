import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {AppDispatch, getAppState, store} from "../../store";
import VideoList from "../../molecules/VideoList";
import {fetchPopularResultThunk, actions} from '../../store/features/fetch-video-slice'
import {youtube} from "../../store/api/youtube";

const PopularVideoBox = styled.section`
  display: flex;
  background: #f9f9f9;
  align-items: center;
  padding: 0 16px 0 16px;
`;

const BrowseBox = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const getPopularVideoList = async (dispatch: AppDispatch) => {
  const resultAction = await dispatch(fetchPopularResultThunk({}));

  if (fetchPopularResultThunk.fulfilled.match(resultAction)) {
    for (const video of getAppState().popularResult.videos) {
      const channelId = video.snippet.channelId;
      try {
        const videoEtag = video.etag;
        const channelList = await youtube.getChannelListById(channelId);
        store.dispatch(actions.setPopularChannelThumbnails({
          videoEtag,
          thumbnails: channelList.items[0].snippet.thumbnails
        }));
      } catch (err) {
        console.error(err);
      }
    }
  }
}

const PopularVideoList = (props: any) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    // getPopularVideoList(dispatch);
  }, [dispatch]);

  return <PopularVideoBox>
    <BrowseBox>
      <VideoList/>
    </BrowseBox>
  </PopularVideoBox>
}

export default PopularVideoList;