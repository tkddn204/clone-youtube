import React, {ElementType, useState} from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

const IconButtonContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  padding: 8px;
  color: #606060;
`;

export interface IconContainerProps {
  margin?: string;
  color?: string;
}

const IconContainer = styled.div<IconContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: ${props => !!props.margin ? `${props.margin}` : '0'};
  color: ${props => !!props.color ? props.color : 'currentColor'};
  vertical-align: middle;
`;

const Button = styled.button`
  outline: none;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`;

const Ripple = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  background: currentColor;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

export interface IconButtonProps {
  icon: ElementType;
  iconStyle?: IconContainerProps;
}

const IconButton = (props: IconButtonProps) => {
  const { icon: Icon, iconStyle } = props;
  const [isTapping, setIsTapping] = useState(false);
  const tapped = () => setIsTapping(true);
  const notTapped = () => setIsTapping(false);

  if (!Icon) {
    throw new Error("Icon was not specified!!");
  }

  const ripple = {
    normal: { opacity: 0, velocity: 50 },
    tapped: { opacity: 0.5, velocity: 50 }
  }

  return <IconButtonContainer>
    <Button
      onMouseDown={tapped}
      onMouseUp={notTapped}
      onMouseLeave={notTapped}>
      <IconContainer {...iconStyle}>
        <Icon/>
      </IconContainer>
    </Button>
    <Ripple
      initial="normal"
      animate={isTapping ? "tapped" : "normal"}
      variants={ripple}
    />
  </IconButtonContainer>
};

export default IconButton;