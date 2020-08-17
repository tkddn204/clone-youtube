import React, {ElementType, ReactNode} from 'react';
import styled from 'styled-components';
import {IconContainerProps} from '../IconButton';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

const IconContainer = styled.div<IconContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  margin: ${props => !!props.margin ? `${props.margin}` : '0'};
  color: ${props => !!props.color ? props.color : 'currentColor'};
`;

interface TitleContainerProps {
  color?: string;
}

const TitleContainer = styled.div<TitleContainerProps>`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  color: ${props => !!props.color ? props.color : 'currentColor' };
`;

interface ButtonProps {
  children?: ReactNode;
  icon?: ElementType;
  iconStyle?: IconContainerProps;
  titleStyle?: TitleContainerProps;
  width?: string | number;
  height?: string | number;
}

const Button = (props: ButtonProps) => {
  const {icon: Icon, iconStyle, titleStyle} = props;
  return <ButtonContainer>
    {!!Icon
      ? <IconContainer {...iconStyle}>
        <Icon/>
      </IconContainer>
      : null
    }
    <TitleContainer {...titleStyle}>
      {props.children}
    </TitleContainer>
  </ButtonContainer>
};

export default Button;