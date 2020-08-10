import React, {ReactNode, useState} from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

const IconButtonContainer = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  padding: 8px;
  color: #606060;
`;

interface IconContainerStyleProps {
  width?: string | number;
  height?: string | number;
}
const IconContainer = styled.div<IconContainerStyleProps>`
  display: inline-flex;
  position: relative;
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
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

interface IconButtonProps {
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
}

/**
 *
 * @param props children must be "Icon"!!!
 * @constructor
 */
const IconButton = (props: IconButtonProps) => {
  const [isTapping, setIsTapping] = useState(false);
  const tapped = () => setIsTapping(true);
  const notTapped = () => setIsTapping(false);

  const ripple = {
    normal: { opacity: 0, velocity: 50 },
    tapped: { opacity: 0.5, velocity: 50 }
  }

  return <IconButtonContainer>
    <Button
      onMouseDown={tapped}
      onMouseUp={notTapped}
      onMouseLeave={notTapped}>
      <IconContainer>
        {props.children}
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