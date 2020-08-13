import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect, useDispatch} from "react-redux";
import {DrawerSelector} from "../../store/selectors";
import {AppDispatch} from "../../store";
import {closeDrawer} from "../../store/features/drawer-slice";
import Guide from "../Guide";

interface CommonProps {
  duration?: number;
}

interface DrawerBoxProps extends CommonProps {
  visibility?: string;
}

const DrawerBox = styled.div<DrawerBoxProps>`
  position: fixed;
  top: -120px;
  right: 0;
  bottom: 0;
  //bottom: -120px;
  left: 0;
  visibility: ${props => !!props.visibility ? props.visibility : "hidden"};
  transition-duration: ${props => !!props.duration ? `${props.duration}ms` : "200ms"};
  transition-property: visibility;
  touch-action: pan-y;
  z-index: 2000;
`;

const AbsoluteBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

interface ScrimProps {
  opacity?: number,
  duration?: number
}

const ScrimBox = styled(AbsoluteBox)<ScrimProps>`
  transition-property: opacity;
  transform: translateZ(0);
  opacity: ${props => props.opacity};
  transition-duration: ${props => !!props.duration ? `${props.duration}ms` : "200ms"};
  background: #00000080;
`;

interface ContentContainerProps extends CommonProps {
  width?: number;
  isOpen?: boolean;
}

const ContentContainer = styled(AbsoluteBox)<ContentContainerProps>`
  width: ${props => !!props.width ? `${props.width}px` : "240px"};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 120px 0;
  background: transparent;
  transform: ${props => props.isOpen ? "translate3d(0, 0, 0)" : "translate3d(-100%, 0, 0)"};
  transition-property: transform;
  transition-duration: ${props => !!props.duration ? `${props.duration}ms` : "200ms"};
  
  &::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 100%;
    visibility: visible;
    width: 20px;
  }
`;

interface DrawerProps {
  isOpen?: boolean,
  duration?: number
}

const Drawer = (props: DrawerProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [isOpen, setOpen] = useState(props.isOpen);

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen])

  return <DrawerBox
    visibility={isOpen ? "visible" : "hidden"}
    duration={!!props.duration ? props.duration : 200}
  >
    <ScrimBox
      onClick={() => dispatch(closeDrawer())}
      opacity={isOpen ? 1 : 0}
      duration={!!props.duration ? props.duration : 200}
    />
    <ContentContainer
      isOpen={isOpen}
      duration={!!props.duration ? props.duration : 200}>
      <Guide/>
    </ContentContainer>
  </DrawerBox>
}

const mapStateToProps = (state: any) => ({
  isOpen: DrawerSelector(state)
});

export default connect(mapStateToProps)(Drawer);