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

interface IconContainerStyleProps {
  width?: number;
  height?: number;
}
const IconContainer = styled.div<IconContainerStyleProps>`
  display: inline-flex;
  position: relative;
  width: ${props => props.width ? `"${props.width}px"` : '40px'};
  height: ${props => props.height ? `"${props.height}px"` : '40px'};
  align-items: center;
  justify-content: center;
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

export interface IconButtonProps extends IconContainerStyleProps {
  icon: ElementType;
  color?: string;
}

const IconButton = (props: IconButtonProps) => {
  const { icon: Icon, color, width, height } = props;
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
      <IconContainer width={width} height={height}>
        <Icon fill={color}/>
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