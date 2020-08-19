import React, {useEffect} from 'react';
import styled from 'styled-components';
import {connect, useDispatch} from "react-redux";
import {VideoPlayerInfo} from "../store/features/video-player-slice";
import {AppDispatch, getAppState} from "../store";
import {fetchVideoResultThunk} from "../store/features/fetch-youtube-video-slice";
import VideoDetail from "../molecules/VideoDetail";
import {VideoSelector} from "../store/selectors";
import VideoViewer from "../organisms/VideoViewer";

const VideoPlayerBox = styled.div`
  height: 100%;
`;

interface VideoPlayerProps {
  video?: VideoPlayerInfo;
}

const getVideoList = async (dispatch: AppDispatch, id: string) => {
  const resultAction = await dispatch(fetchVideoResultThunk({id}));

  if (fetchVideoResultThunk.fulfilled.match(resultAction)) {
    console.log(`비디오 ${id} 가져옴!`);
  }
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const dispatch: AppDispatch = useDispatch();
  const {video} = props;

  useEffect(() => {
    const id = getAppState().router.location.pathname.split('/')[2];
    if (id) {
      console.log(`비디오 ${id} 가져오는중..`);
      getVideoList(dispatch, id);
    } else {
      // getAppState().router
    }
  }, [dispatch]);

  return <>
    {
      video ?
        <VideoPlayerBox>
          <VideoViewer video={video}/>
          <VideoDetail video={video}/>
        </VideoPlayerBox> : null
    }
  </>
}

const mapStateToProps = (state: any) => ({
  video: VideoSelector(state)[0]
});

export default connect(mapStateToProps)(VideoPlayer);