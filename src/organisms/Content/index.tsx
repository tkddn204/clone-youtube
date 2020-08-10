import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {SearchSelector} from "../../store/features/search-result-slice";

const ContentBox = styled.section`
  display: flex;
  align-items: center;
  padding: 0 16px 0 16px;
`;

const BrowseBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = (props: any) => {
  console.log(props);
  const [videos, setVideos] = useState(props.videos || []);
  useEffect(() => {
    setVideos(props.videos);
  }, [props.videos]);
  console.log(videos);

  return <ContentBox>
    <BrowseBox>
      {videos ? videos.map((video: any) => {
        const thumbnail = video.snippet.thumbnails.high;
        return <div style={{display: 'flex', flexDirection: 'row'}}>
          <img alt="thumbnail" style={{flex:1, width: '180px'}} src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} />
          <p style={{flex:1}}>
            <h2>{video.snippet.title}</h2>
            <hr/>
            <p>{video.snippet.description}</p>
          </p></div>
      }) : null}
    </BrowseBox>
  </ContentBox>
}

const mapStateToProps = (state: any) => ({
  videos: SearchSelector(state)
});

export default connect(mapStateToProps)(Content);