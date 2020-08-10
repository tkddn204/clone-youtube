import React, {ReactNode} from 'react';
import * as Icon from '.';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Icons',
  component: Icon,
  decorators: [ withKnobs ]
};

interface ContainerProps {
  children?: ReactNode;
  width: string;
}
const Container = (props: ContainerProps) => <div style={{width: props.width}}>
  {props.children}
</div>

enum Width {
  SMALL= '24px',
  NORMAL = '48px',
  BIG = '64px',
  AUTO = 'auto'
}

const widthController = select<Width>("가로", [Width.SMALL, Width.NORMAL, Width.BIG], Width.SMALL);

export const Icons = () => <div>
  <Container width={widthController}><Icon.GuideIcon /></Container>
  <Container width={widthController}><Icon.ProfileIcon /></Container>
  <Container width={widthController}><Icon.SearchIcon /></Container>
  <Container width={widthController}><Icon.UploadIcon /></Container>
</div>
