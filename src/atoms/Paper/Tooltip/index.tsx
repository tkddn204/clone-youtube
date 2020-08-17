import React, {ReactNode, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
import {connect} from "react-redux";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ChildContainer = styled.div`
`;

interface TextContainerProps {
  left: number;
  top: number;
}

const TextContainer = styled.div<TextContainerProps>`
  display: block;
  position: absolute;
  left: ${props => !!props.left ? `${props.left}px` : "0px"};
  //right: auto;
  top: ${props => !!props.top ? `${props.top}px` : "44px"};
  //bottom: auto;
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
  content: string;
  screenSize: { width: number, height: number };
}

const Tooltip = (props: TooltipProps) => {
  const containerBoxRef = useRef<HTMLDivElement>(null);
  const textBoxRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);
  const [textPosition, setTextPosition] = useState({ left: 0, top: 0 });


  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  useEffect(() => {

    const calculateLeft = (screenWidth: number, containerBoxRect: DOMRect, textBoxRect: DOMRect): number => {
      const middle = (containerBoxRect.left + containerBoxRect.right) / 2;
      let left = middle - (textBoxRect.width / 2);
      if (left + textBoxRect.width > screenWidth - 16) {
        left = screenWidth - textBoxRect.width - 24; // padding
      } else if (left < 0) {
        left = 24; // padding
      }
      return left;
    }

    const calculateTop = (screenWidth: number, containerBoxRect: DOMRect, textBoxRect: DOMRect): number => {
      return containerBoxRect.bottom + textBoxRect.height > screenWidth ? -44 : 44;
    }

    const getTextPosition = () => {
      const { width: screenWidth, height: screenHeight } = props.screenSize;
      const containerBoxRect = (containerBoxRef.current as HTMLDivElement).getBoundingClientRect();
      const textBoxRect = (textBoxRef.current as HTMLDivElement).getBoundingClientRect();
      const left = calculateLeft(screenWidth, containerBoxRect, textBoxRect);
      const top = calculateTop(screenHeight, containerBoxRect, textBoxRect);
      return { left, top };
    };

    const textPosition = getTextPosition();
    setTextPosition(textPosition);
  }, [props.screenSize]);

  const variants = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
  }

  return <Container>
    <ChildContainer ref={containerBoxRef} onMouseEnter={show} onMouseLeave={hide}>
      {props.children}
    </ChildContainer>
    <TextContainer ref={textBoxRef} left={textPosition.left} top={textPosition.top}>
      <TextContent
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
        variants={variants}
      >
        {props.content}
      </TextContent>
    </TextContainer>
  </Container>;
}

const mapStateToProps = (state: any) => ({
  screenSize: state.screenSize
});

export default connect(mapStateToProps)(Tooltip);