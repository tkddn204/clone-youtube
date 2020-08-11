import React, { useEffect } from 'react';
import styled from 'styled-components';
import VideoList from "../../molecules/VideoList";
import {getAppState, store} from "../../store";
import {fetchPopularResult, setChannelThumbnails} from "../../store/features/popular-result-slice";
import {youtube} from "../../store/api/youtube";

const ContentBox = styled.section`
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

const Content = (props: any) => {
  useEffect(() => {
    store.dispatch(fetchPopularResult())
      .then(resultAction => {
        if (fetchPopularResult.fulfilled.match(resultAction)) {
          getAppState().popularResult.videos.forEach(async (video: any) => {
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
        }
      });
  }, []);

  return <ContentBox>
    <BrowseBox>
      <VideoList />
    </BrowseBox>
  </ContentBox>
}

export default Content;