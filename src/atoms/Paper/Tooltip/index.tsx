import React, {ReactNode, useEffect, useState} from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

const Container = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: auto;
  top: 44px;
  bottom: auto;
  white-space: nowrap;
  outline: none;
  z-index: 1000;
  color: inherit;
  cursor: default;
`;

const TextContent = styled(motion.div)`
  background: #616161;
  outline: none;
  color: white;
  padding: 8px;
  border-radius: 2px;
  margin: 8px;
  font-size: 1.3rem;
  line-height: 1.8rem;
  text-transform: none;
`;

interface TooltipProps {
  children?: ReactNode;
  isVisible?: boolean;
}

const Tooltip = (props: TooltipProps) => {
  const [isVisible, setVisible] = useState(props.isVisible);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  useEffect(() => {
    setVisible(props.isVisible);
  }, [props.isVisible]);

  const variants = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
  }

  return <Container onMouseUp={show} onMouseLeave={hide}>
    <TextContent
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay: 0.5 }}
      variants={variants}
    >
      {props.children}
    </TextContent>
  </Container>
}

export default Tooltip;