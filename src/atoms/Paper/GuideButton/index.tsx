import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ButtonContainer = styled.div`
  display: block;
  width: 100%;
  
  &:hover {
    background: #0000000d;
  }
  
  &:active {
    background: #0000001a;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  padding: 0 24px;
  min-width: 0;
  height: 40px;
  min-height: 40px;
`;

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  margin-right: 24px;
  color: #606060;
`;

const TitleContainer = styled.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
`;

interface GuideButtonProps {
  width?: string | number;
  height?: string | number;
  link?: string;
  icon?: ReactNode;
  title?: string;
}

const GuideButton = (props: GuideButtonProps) => {
  const {link, icon, title} = props;
  return <ButtonContainer>
    <Link to={link || "/"}>
      <ButtonContent>
        <IconContainer>
          {icon}
        </IconContainer>
        <TitleContainer>
          {title}
        </TitleContainer>
      </ButtonContent>
    </Link>
  </ButtonContainer>
};

export default GuideButton;