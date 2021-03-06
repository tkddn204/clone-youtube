import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import IconButton from "../../../atoms/Paper/IconButton";
import {VerticalMenuIcon} from "../../../atoms/Icon";
import {VideoItemContentLoader} from "../../ContentLoader/stories";
import moment from 'moment';

const Container = styled.div`
  width: 249px;
  margin: 0 8px 40px 8px;
  padding: 0;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 320px;
`;

const Thumbnail = styled.img`
  position: relative;
  width: 100%;
  flex: none;
`;

const DetailContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin: 0;
`;

const AvatarContainer = styled.div`
  display: inline-block;
  margin: 12px 12px 0 0;
  border-radius: 50%;
  overflow: hidden;
  width: 36px;
  height: 36px;
  flex: none;
`;

const Avatar = styled.img`
  display: block;
  border-radius: unset;
`;

const DetailMetaContainer = styled.div`
  padding: 0 24px 0 0;
`;

const DetailTitle = styled.h3`
  margin: 12px 0 6px 0;
  color: #030303;
  font-size: 1.4rem;
  line-height: 2rem;
  max-height: 4rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
`;

const DetailMeta = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
`;

const DetailMetaContent = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  word-wrap: normal;
`;

const DetailChannelName = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  color: #606060;
`;

interface DetailMetaSpanProps {
  after?: string;
  afterMargin?: string;
}

const DetailMetaSpan = styled.span<DetailMetaSpanProps>`
  display: inline-block;
  user-select: text;
  color: #606060;
  &::after {
    content: ${props => !!props.after ? `"${props.after}"` : ""};
    margin: ${props => !!props.afterMargin ? props.afterMargin : "0"};
  }
`;

interface DetailStreamingProps {
  visibility?: "visible" | "hidden"
}

const DetailStreamingContainer = styled.div<DetailStreamingProps>`
  display: block;
  visibility: ${props => !!props.visibility ? props.visibility : "hidden"};
  width: 100%;
`;

const DetailStreamingSpan = styled.span`
  white-space: inherit;
  color: #c00;
  margin: 4px 4px 0 0;
  border-radius: 2px;
  border: 1px solid #c00;
  padding: 3px 4px;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.2rem;
`

const MenuIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 4px;
`;

interface Props {
  video?: any
}

const VideoItem = (props: Props) => {
  const [video, setVideo] = useState(props.video || []);
  const [isMouseOver, setMouseOver] = useState(false);
  const {id, thumbnailSrc, title, channelName, channelThumbnailSrc, viewCount, publishedAt, isStreaming} = video;

  useEffect(() => {
    setVideo(props.video);
  }, [props.video]);

  const onContentMouseOver = () => {
    setMouseOver(true)
  };
  const onContentMouseDown = () => {
    setMouseOver(false)
  };

  return <Container>
    {!!video
      ? <>
        <Link to={`/video/${id}`}>
          <Content onMouseEnter={onContentMouseOver} onMouseLeave={onContentMouseDown}>
            <Thumbnail src={thumbnailSrc} alt={`thumbnail-${title}`}/>
            <DetailContainer>
              <AvatarContainer>
                <Avatar src={channelThumbnailSrc} alt={`channelThumbnail-${channelName}`}/>
              </AvatarContainer>
              <DetailMetaContainer>
                <DetailTitle>
                  {title}
                </DetailTitle>
                <DetailMeta>
                  <DetailChannelName>
                    {channelName}
                  </DetailChannelName>
                  <DetailMetaContent>
                    <DetailMetaSpan after="•" afterMargin="0 4px">
                      {`조회수 ${new Intl.NumberFormat('ko', {
                        //@ts-ignore
                        notation: 'compact',
                        compactDisplay: "short"
                      }).format(viewCount)}회`}
                    </DetailMetaSpan>
                    <DetailMetaSpan>
                      {moment(publishedAt).fromNow()}
                    </DetailMetaSpan>
                  </DetailMetaContent>
                </DetailMeta>
              </DetailMetaContainer>
            </DetailContainer>
            <DetailStreamingContainer visibility={isStreaming ? "visible" : "hidden"}>
              <DetailStreamingSpan>
                실시간 스트리밍 중
              </DetailStreamingSpan>
            </DetailStreamingContainer>
          </Content>
        </Link>
        <MenuIconContainer>
          {isMouseOver ? <IconButton
            icon={VerticalMenuIcon}
            isRipple={false}
            iconStyle={{
              color: '#606060'
            }}
          /> : null}
        </MenuIconContainer>
      </>
      : <VideoItemContentLoader/>
    }
  </Container>
}

export default VideoItem;