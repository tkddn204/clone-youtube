import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {NormalizedYoutubeVideoInfo} from "../../store/selectors";
import ToggleButton from "../../atoms/Paper/ToggleButton";
import {ThumbUpIcon} from "../../atoms/Icon";

const VideoDetailBox = styled.div`
  overflow: hidden;
  font-weight: 400;
  line-height: 2.4rem;
  font-size: 1.8rem;
  color: #030303;
  word-break: break-word;
  letter-spacing: normal;
`;

const TagListBox = styled.div`
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

const Tag = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #065fd4;
  
  &:visited {
    color: #065fd4;
  }
`;

const VideoTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
`;

const FlexRowBox = styled.div`
  display: flex;
  flex-direction: row;
`

const VideoInfoContainer = styled(FlexRowBox)`
  justify-content: space-between;
  align-items: center;
`;

const VideoInfoTextBox = styled(FlexRowBox)`
  color: #606060;
`;

interface VideoInfoTextProps {
  afterContent?: string;
}

const VideoInfoText = styled.div<VideoInfoTextProps>`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  
  &::after {
    content: ${props => !!props.afterContent ? `"${props.afterContent}"` : ''};
    margin: ${props => !!props.afterContent ? "0 4px" : ''};
  }
`;

const MenuContainer = styled(FlexRowBox)`
`;


export interface VideoDetailProps extends NormalizedYoutubeVideoInfo {
  tags?: ReadonlyArray<string>;
}

const VideoDetail = (props: VideoDetailProps) => {
  const { tags, title, viewCount, publishedAt } = props;

  return <VideoDetailBox>
    {!!tags ?
      <TagListBox>
        {tags.map(tag => <Tag to={`?q=${tag}`}>{tag}&nbsp;</Tag>)}
      </TagListBox> : null
    }
    <VideoTitle>
      {title}
    </VideoTitle>
    <VideoInfoContainer>
      <VideoInfoTextBox>
        <VideoInfoText afterContent="•">
          조회수 {!!viewCount ? viewCount : 0}회
        </VideoInfoText>
        <VideoInfoText>
          {publishedAt.toLocaleDateString()}
        </VideoInfoText>
      </VideoInfoTextBox>
      <MenuContainer>
        <ToggleButton margin={"0 16px"} icon={ThumbUpIcon}>
          좋아요
        </ToggleButton>
        <ToggleButton margin={"0 16px"} icon={ThumbUpIcon}>
          싫어요
        </ToggleButton>
      </MenuContainer>
    </VideoInfoContainer>
  </VideoDetailBox>
}

export default VideoDetail;