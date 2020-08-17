import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import HeaderLogo from "../HeaderLogo";
import Button from "../../atoms/Paper/Button";
import sectionList from "./sectionList";

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

const GuideButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  min-width: 0;
  height: 40px;
  min-height: 40px;
  
  &:hover {
    background: #0000000d;
  }
  
  &:active {
    background: #0000001a;
  }
`;

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
            <Link to={item.link || "/"}>
              <GuideButton>
                <Button icon={item.icon} iconStyle={{
                  color: "#606060",
                  margin: "0 24px 0 0"
                }}>
                  {item.title}
                </Button>
              </GuideButton>
            </Link>)}
        </GuideSection>
      )};
    </GuideSections>
  </GuideContent>
</GuideBox>

export default Guide;