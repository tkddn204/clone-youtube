import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {VideoInfo} from "../../store/features/video-player-slice";
import ToggleButton from "../../atoms/Paper/ToggleButton";
import {ThumbUpIcon, ShareIcon, SaveListIcon, HorizonMenuIcon, ThumbDownIcon} from "../../atoms/Icon";
import Tooltip from "../../atoms/Paper/Tooltip";
import strings  from "../../datas/strings";
import Button from "../../atoms/Paper/Button";
import IconButton from "../../atoms/Paper/IconButton";

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
  > * {
    &:not(:first-child) {
      margin: 0 0 0 8px;
    }
  }
`;

export interface VideoDetailProps {
  video: VideoInfo
}

const VideoDetail = (props: VideoDetailProps) => {
  const { tags, title, viewCount, publishedAt } = props.video;
  const normalColor = "#606060";
  const iconStyle = {
    color: normalColor,
    margin: "8px"
  }
  const titleStyle = {
    color: normalColor
  }

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
        <Tooltip content={strings.tooltip.good}>
          <ToggleButton icon={ThumbUpIcon}>
            좋아요
          </ToggleButton>
        </Tooltip>
        <Tooltip content={strings.tooltip.bad}>
          <ToggleButton icon={ThumbDownIcon}>
            싫어요
          </ToggleButton>
        </Tooltip>
        <Tooltip content={strings.tooltip.share}>
          <Button icon={ShareIcon} iconStyle={iconStyle} titleStyle={titleStyle}>
            공유
          </Button>
        </Tooltip>
        <Button icon={SaveListIcon} iconStyle={iconStyle} titleStyle={titleStyle}>
          저장
        </Button>
        <IconButton icon={HorizonMenuIcon} iconStyle={{ color: iconStyle.color }}/>
      </MenuContainer>
    </VideoInfoContainer>
  </VideoDetailBox>
}

export default VideoDetail;