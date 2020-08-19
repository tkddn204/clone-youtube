import React from 'react';
import styled from 'styled-components';
import {VideoInfo} from "../../store/features/video-player-slice";

const VideoViewerBox = styled.div`
  // 출처: https://positivemh.tistory.com/12
  position: relative;
  height:0;
  padding: 30px 0 56.25% 0;
  overflow:hidden;
    
  & iframe, .video-container object, .video-container embed {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  } 
`;

export interface VideoViewerProps {
  video: Pick<VideoInfo, "id" | "title">
}

const VideoViewer = (props: VideoViewerProps) => {
  const {id, title} = props.video;
  return <VideoViewerBox>
    {id ?
      <iframe width="100%" height="auto" src={`https://www.youtube.com/embed/${id}`} frameBorder="0"
              title={title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      : null
    }
  </VideoViewerBox>;
}

export default VideoViewer;
