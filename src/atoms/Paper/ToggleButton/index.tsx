import React, {ReactText, useEffect, useState} from 'react';
import styled from 'styled-components';
import IconButton, {IconButtonProps} from "../IconButton";

interface ToggleButtonContainerProps {
  margin?: string;
}

const ToggleButtonContainer = styled.div<ToggleButtonContainerProps>`
  display: flex;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 0 8px 0 0;
  line-height: 1.7rem;
  letter-spacing: 0.007px;
  color: #909090;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ToggleButtonText = styled.span`
  color: ${props => !!props.color ? props.color : "#909090"};
`;

interface ToggleButtonProps extends IconButtonProps {
  children?: ReactText;
  isOn?: boolean;
  width?: number;
  height?: number;
}

const ToggleButton = (props: ToggleButtonProps) => {
  const { icon: Icon} = props;

  const [isOn, setOn] = useState(props.isOn);

  const color = isOn ? "#065fd4" : "#909090";
  const iconStyle = {
    color
  };

  useEffect(() => {
    setOn(props.isOn);
  }, [props.isOn]);

  return <ToggleButtonContainer>
    <IconButton icon={Icon} iconStyle={iconStyle} />
    <ToggleButtonText color={color}>
      {props.children}
    </ToggleButtonText>
  </ToggleButtonContainer>
};

export default ToggleButton;