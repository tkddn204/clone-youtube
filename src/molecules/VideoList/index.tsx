import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import {VideoListSelector} from "../../store/selectors";
import VideoItem from "./VideoItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 16px 0 0 0;
`;

const VideoList = (props: any) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(props.videos.popular);
  }, [props.videos.popular]);

  useEffect(() => {
    setVideos(props.videos.search);
  }, [props.videos.search]);

  return <Container>
    {!!videos ? videos.map((video: any, index: number) => <VideoItem video={video} key={index} />) : null}
  </Container>
}

const mapStateToProps = (state: any) => ({
  videos: VideoListSelector(state)
});

export default connect(mapStateToProps)(VideoList);