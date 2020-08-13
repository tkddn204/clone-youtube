import React from 'react';
import styled from 'styled-components';
import HeaderLogo from "../HeaderLogo";
import GuideButton from "../../atoms/Paper/GuideButton";
import {FireIcon, HistoryIcon, HomeIcon, StoreIcon, SubscribesIcon, YoutubeIcon} from "../../atoms/Icon";

const GuideBox = styled.div`
  margin-right: 16px;
  background: white;
`;

const GuideHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 16px;
  height: 56px;
  border-bottom: 1px solid #0000001A;
`;

const GuideContent = styled.div`
  display: block;
  width: 240px;
  overflow: hidden;
  flex: 1;
`;

const GuideSections = styled.div`
`;

const GuideSection = styled.section`
  padding: 12px 0;
`;

const GuideSectionTitle = styled.h3`
  padding: 8px 24px;
  color: #606060;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: .007px;
  text-transform: uppercase;
`;

const sectionList = [
  {
    title: '',
    items: [{
      link: "/",
      icon: <HomeIcon/>,
      title: '홈'
    }, {
      link: "/",
      icon: <FireIcon/>,
      title: '인기'
    }, {
      link: "/",
      icon: <SubscribesIcon/>,
      title: "구독"
    }, {
      link: "/",
      icon: <YoutubeIcon/>,
      title: "Originals"
    }]
  },
  {
    title: '',
    items: [{
      link: "/",
      icon: <StoreIcon/>,
      title: "보관함"
    }, {
      link: "/",
      icon: <HistoryIcon/>,
      title: "시청 기록"
    }]
  },
  {
    title: '구독',
    items: []
  },
  {
    title: 'youtube 더보기',
    items: []
  }
];

const Guide = () => <GuideBox>
  <GuideHeader>
    <HeaderLogo/>
  </GuideHeader>
  <GuideContent>
    <GuideSections>
      {sectionList.map((section) =>
        <GuideSection>
          {!!section.title ? <GuideSectionTitle>{section.title}</GuideSectionTitle> : null}
          {section.items.map((item) =>
            <GuideButton
              link={item.link}
              icon={item.icon}
              title={item.title}
            />)}
        </GuideSection>
      )};
    </GuideSections>
  </GuideContent>
</GuideBox>

export default Guide;